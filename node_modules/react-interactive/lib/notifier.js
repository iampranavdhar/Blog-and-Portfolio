'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyOfNext = notifyOfNext;
exports.cancelNotifyOfNext = cancelNotifyOfNext;
exports.notifyOfAll = notifyOfAll;

var _constants = require('./constants');

// list of callbacks that are called every time the event fires
// only one callback function per eventType b/c notifyOfAll is only used by inputTracker
// {
//   eventType: callback,
//   eventA: cbFunctionA,
//   eventB: cbFunctionB,
// }
var notifyOfAllSubs = {};

// list of callbacks that are called only for the next event and then deleted
// {
//   eventType: [{ id, callback }, { id, callback }, ...],
//   eventA: [{ id: 1, callback: cbFunctionA }, { id: 2, callback: cbFunctionB }],
//   eventB: [{ id: 3, callback: cbFunctionC }, { id: 4, callback: cbFunctionD }],
// }
var notifyOfNextSubs = {};

// list of sub IDs with corresponding index in notifyOfNextSubs array for easy cancelation of sub
// {
//   eventType: { id: indexInNotifyOfNextSubsArray },
//   eventA: { 1: 0, 2: 1 },
//   eventB: { 3: 0, 4: 1 },
// }
var subsIDs = {};

// generate unique ID
var idPlace = 0;
function nextID(eType) {
  if (idPlace === Number.MAX_SAFE_INTEGER) idPlace = 0;
  idPlace++;
  if (subsIDs[eType][idPlace] === undefined) return idPlace;
  return nextID(eType);
}

// subscribe to notifyOfNext, returns the ID of the subscription so it can be canceled
function notifyOfNext(eType, callback) {
  var id = nextID(eType);
  subsIDs[eType][id] = notifyOfNextSubs[eType].push({ id: id, callback: callback }) - 1;
  return id;
}

// cancel an already existing subscription
var blankFunction = function blankFunction() {};
function cancelNotifyOfNext(eType, id) {
  if (subsIDs[eType][id] !== 'undefined') {
    notifyOfNextSubs[eType][subsIDs[eType][id]].callback = blankFunction;
    delete subsIDs[eType][id];
  }
}

// subscribe to notifyOfAll, only used by inputTracker
function notifyOfAll(eTypes, callback) {
  eTypes.forEach(function (eType) {
    notifyOfAllSubs[eType] = callback;
  });
}

// notify all when event comes in
function handleNotifyAll(e) {
  notifyOfAllSubs[e.type](e);
}

// notify next when event comes, if the callback returns 'reNotifyOfNext', then re-subscribe
// using the same id
function handleNotifyNext(e) {
  if (notifyOfNextSubs[e.type].length === 0) return;
  e.persist = blankFunction;
  var reNotifyOfNext = [];
  var reNotifyOfNextIDs = {};
  notifyOfNextSubs[e.type].forEach(function (sub) {
    if (sub.callback(e) === 'reNotifyOfNext') {
      reNotifyOfNextIDs[sub.id] = reNotifyOfNext.push(sub) - 1;
    }
  });
  notifyOfNextSubs[e.type] = reNotifyOfNext;
  subsIDs[e.type] = reNotifyOfNextIDs;
}

function handleNotifyAllAndNext(e) {
  handleNotifyAll(e);
  handleNotifyNext(e);
}

// setup event listeners and notification system for events
function setupEvent(element, eType, handler, capture) {
  notifyOfNextSubs[eType] = [];
  subsIDs[eType] = {};
  element.addEventListener(eType, handler, _constants.passiveEventSupport ? {
    capture: capture,
    // don't set click listener as passive because syntheticClick may call preventDefault
    passive: eType !== 'click'
  } : capture);
}

if (_constants.deviceHasTouch) {
  // set up click listener for use with syntheticClick on touch devices
  setupEvent(window, 'click', handleNotifyAll, true);

  // if the device has touch, then setup event listeners for touch events
  Object.keys(_constants.touchEvents).forEach(function (eType) {
    setupEvent(document, eType, eType === 'touchstart' ? handleNotifyAllAndNext : handleNotifyAll, true);
  });
}

// if the device has a mouse, then setup event listeners for mouse events,
// see manageNotifyOfNext and handleNotifyOfNext in index.js for more info
// on why a specific listener is set
if (_constants.deviceHasMouse) {
  Object.keys(_constants.mouseEvents).forEach(function (eType) {
    setupEvent(document, eType, eType === 'mouseenter' ? handleNotifyAllAndNext : handleNotifyAll,
    // don't use capture for enter/leave so the event only fires when the mouse leaves the doc
    !(eType === 'mouseenter' || eType === 'mouseleave'));
  });

  setupEvent(document, 'dragstart', handleNotifyNext, true);

  if (_constants.passiveEventSupport) {
    setupEvent(document, 'scroll', handleNotifyNext, true);
  }

  notifyOfNextSubs.mutation = [];
  subsIDs.mutation = {};
  var mutationEvent = (0, _constants.dummyEvent)('mutation');
  var mo = window.MutationObserver ? new MutationObserver(handleNotifyNext.bind(null, mutationEvent)) : { observe: function observe() {} };
  mo.observe(document, {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true
  });
}

// always set focus/blur listener on the window so know when leave/enter the app/window/tab
['focus', 'blur'].forEach(function (eType) {
  setupEvent(window, eType, handleNotifyNext, false);
});

// always set keydown listener for enter key events for form submission
setupEvent(document, 'keydown', handleNotifyAll, true);