(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Interactive"] = factory(require("react"));
	else
		root["Interactive"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childInteractiveProps = exports.defaultTapTimeCutoff = exports.queueTime = exports.knownProps = exports.knownRoleTags = exports.nonBlurrableTags = exports.statePropOptionKeys = exports.stateProps = exports.iStates = exports.otherEvents = exports.touchEvents = exports.mouseEvents = exports.passiveEventSupport = exports.deviceHasMouse = exports.deviceHasTouch = exports.deviceType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enterKeyTrigger = enterKeyTrigger;
exports.spaceKeyTrigger = spaceKeyTrigger;
exports.dummyEvent = dummyEvent;

var _detectIt = __webpack_require__(15);

var _detectIt2 = _interopRequireDefault(_detectIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceType = exports.deviceType = _detectIt2.default.deviceType;
var deviceHasTouch = exports.deviceHasTouch = _detectIt2.default.hasTouch;
var deviceHasMouse = exports.deviceHasMouse = _detectIt2.default.hasMouse;
var passiveEventSupport = exports.passiveEventSupport = _detectIt2.default.passiveEvents;

var mouseEvents = exports.mouseEvents = {
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp'
};

var touchEvents = exports.touchEvents = {
  touchstart: 'onTouchStart',
  touchend: 'onTouchEnd',
  touchcancel: 'onTouchCancel'
};

var otherEvents = exports.otherEvents = {
  focus: 'onFocus',
  blur: 'onBlur',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd'
};

var iStates = exports.iStates = {
  normal: true,
  hover: true,
  hoverActive: true,
  touchActive: true,
  keyActive: true
};

var stateProps = exports.stateProps = _extends({}, iStates, {
  active: true,
  focus: true,
  focusFromTab: true,
  focusFromMouse: true,
  focusFromTouch: true
});

var statePropOptionKeys = exports.statePropOptionKeys = ['style', 'className'];

// don't toggle focus on these tags
var nonBlurrableTags = exports.nonBlurrableTags = {
  input: true,
  textarea: true,
  select: true
};

// tags with known roles, and that the browser may have a click handler for
var knownRoleTags = exports.knownRoleTags = _extends({}, nonBlurrableTags, {
  button: true,
  a: true,
  area: true
});

// elements triggered by the enter key
function enterKeyTrigger(tag, type) {
  return tag !== 'select' && (tag !== 'input' || type !== 'checkbox' && type !== 'radio');
}

// elements triggered by the space bar
function spaceKeyTrigger(tag, type) {
  return tag === 'button' || tag === 'select' || tag === 'input' && (type === 'checkbox' || type === 'radio' || type === 'submit');
}

// known props to not pass through, every prop not on this list is passed through
var knownProps = exports.knownProps = _extends({}, stateProps, {
  children: true,
  as: true,
  style: true,
  className: true,
  wrapperStyle: true,
  wrapperClassName: true,
  onStateChange: true,
  setStateCallback: true,
  onClick: true,
  onTapTwo: true,
  onTapThree: true,
  onTapFour: true,
  onLongPress: true,
  tapTimeCutoff: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseDown: true,
  onMouseUp: true,
  onTouchStart: true,
  onTouchMove: true,
  onTouchEnd: true,
  onTouchCancel: true,
  onFocus: true,
  onBlur: true,
  onKeyDown: true,
  onKeyUp: true,
  forceState: true,
  initialState: true,
  refDOMNode: true,
  mutableProps: true,
  useBrowserOutlineFocus: true,
  useBrowserCursor: true,
  touchActiveTapOnly: true,
  extraTouchNoTap: true,
  focusToggleOff: true,
  stylePriority: true,
  nonContainedChild: true,
  interactiveChild: true
});

// ms to allow for the browser to add subsequent event to the queue in setTimeouts
var queueTime = exports.queueTime = 600;

var defaultTapTimeCutoff = exports.defaultTapTimeCutoff = 500;

function dummyEvent(type) {
  return {
    type: type,
    persist: function persist() {},
    preventDefault: function preventDefault() {},
    stopPropagation: function stopPropagation() {}
  };
}

var childInteractiveProps = exports.childInteractiveProps = {
  showOnParent: true,
  onParentNormal: true,
  onParentHover: true,
  onParentActive: true,
  onParentHoverActive: true,
  onParentTouchActive: true,
  onParentKeyActive: true,
  onParentFocus: true,
  onParentFocusFromTab: true,
  onParentFocusFromMouse: true,
  onParentFocusFromTouch: true
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyOfNext = notifyOfNext;
exports.cancelNotifyOfNext = cancelNotifyOfNext;
exports.notifyOfAll = notifyOfAll;

var _constants = __webpack_require__(0);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(3);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(10);

var _compareProps = __webpack_require__(20);

var _compareProps2 = _interopRequireDefault(_compareProps);

var _mergeAndExtractProps2 = __webpack_require__(21);

var _mergeAndExtractProps3 = _interopRequireDefault(_mergeAndExtractProps2);

var _extractStyle = __webpack_require__(22);

var _recursiveNodeCheck = __webpack_require__(23);

var _recursiveNodeCheck2 = _interopRequireDefault(_recursiveNodeCheck);

var _inputTracker = __webpack_require__(24);

var _inputTracker2 = _interopRequireDefault(_inputTracker);

var _notifier = __webpack_require__(6);

var _syntheticClick = __webpack_require__(25);

var _syntheticClick2 = _interopRequireDefault(_syntheticClick);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interactive = function (_React$Component) {
  _inherits(Interactive, _React$Component);

  function Interactive(props) {
    _classCallCheck(this, Interactive);

    // state is always an object with two keys, `iState` and `focus`
    var _this = _possibleConstructorReturn(this, (Interactive.__proto__ || Object.getPrototypeOf(Interactive)).call(this, props));

    _this.refCallback = function (node) {
      _this.refNode = node;
      if (node) {
        var prevTopNode = _this.topNode;
        // if `as` is a component, then the `refNode` is the span wrapper, so get its firstChild
        if (typeof _this.p.props.as !== 'string') _this.topNode = node.firstChild;else _this.topNode = node;
        _this.tagName = _this.topNode.tagName.toLowerCase();
        _this.type = _this.topNode.type && _this.topNode.type.toLowerCase();
        _this.enterKeyTrigger = (0, _constants.enterKeyTrigger)(_this.tagName, _this.type);
        _this.spaceKeyTrigger = (0, _constants.spaceKeyTrigger)(_this.tagName, _this.type);
        // if as is a react component then won't have access to tag in componentWillReceiveProps,
        // so check if click listener needs to be set again here (after this.tagName is set)
        if (_this.setClickListener(_this.p.props)) _this.p.passThroughProps.onClick = _this.handleEvent;
        // if node is a new node then call manageFocus to keep browser in sync with RI,
        // note: above assignments can't be in this if statement b/c node could have mutated,
        // node should maintain focus state when mutated
        if (prevTopNode !== _this.topNode) {
          _this.manageFocus('refCallback');
          // if refDOMNode prop, pass along new DOM node
          _this.p.props.refDOMNode && _this.p.props.refDOMNode(_this.topNode);
        }
      }
    };

    _this.handleEvent = function (e) {
      if (!_this.isValidEvent(e)) return;

      if (_constants.mouseEvents[e.type]) {
        if (_this.handleMouseEvent(e) === 'terminate') return;
      } else if (_constants.touchEvents[e.type] || e.type === 'touchmove' || e.type === 'touchtapcancel') {
        if (_this.handleTouchEvent(e) === 'terminate') return;
      } else if (e.type === 'click') {
        if (_this.handleClickEvent(e) === 'terminate') return;
      } else if (_this.handleOtherEvent(e) === 'terminate') return;

      // compute the new state object and pass it as an argument to updateState,
      // which calls setState and state change callbacks if needed
      _this.updateState(_this.computeState(), _this.p.props, e);
    };

    _this.handleNotifyOfNext = function (e) {
      var updateState = false;

      switch (e.type) {
        case 'scroll':
        case 'mouseenter':
        case 'mutation':
          // check mouse position, if it's still on RI, then reNotifyOfNext, else updateState
          if (_this.track.mouseOn && _this.checkMousePosition() === 'mouseOn') {
            return 'reNotifyOfNext';
          }
          _this.track.mouseOn = false;
          _this.track.buttonDown = false;
          updateState = true;
          break;

        case 'touchstart':
          // cancel tap if extra touch point, or when touch someplace else on the screen
          // check topNode and children to make sure they weren't the target
          if (_this.p.props.extraTouchNoTap) {
            if (_this.track.touches.active < _this.maxTapPoints && (0, _recursiveNodeCheck2.default)(_this.topNode, function (node) {
              return e.target === node;
            })) {
              return 'reNotifyOfNext';
            }
            updateState = _this.handleTouchEvent({ type: 'touchtapcancel' }) === 'updateState';
          }
          break;

        case 'dragstart':
          // use setTimeout because notifier drag event will fire before the drag event on RI,
          // so w/o timeout when this intance of RI is dragged it would go:
          // active -> force normal from notifier drag -> active from RI's drag event,
          // but the timeout will allow time for RI's drag event to fire before force normal
          _this.manageSetTimeout('dragstart', function () {
            if (!_this.track.drag) {
              _this.forceTrackIState('normal');
              _this.updateState(_this.computeState(), _this.p.props, e, true);
            }
          }, 30);
          break;

        // window focus event
        case 'focus':
          // reinstate previous focus state if this window focus event is followed by
          // an element focus event, otherwise cancel focus reinstatement
          if (_this.track.previousFocus !== false) {
            _this.track.reinstateFocus = true;
            _this.manageSetTimeout('windowFocus', function () {
              _this.track.reinstateFocus = false;
            }, _constants.queueTime);
          }
          break;

        // window blur event to preserve the focus state
        case 'blur':
          // clear the timer set in manageNotifyOfNext that was set to cancel this notification
          _this.cancelTimeout('elementBlur');
          // notifiy of the next window focus event (re-entering the app/window/tab)
          if (!_this.track.notifyOfNext.focus) {
            _this.track.notifyOfNext.focus = (0, _notifier.notifyOfNext)('focus', _this.handleNotifyOfNext);
          }
          break;
        default:
      }

      if (updateState) _this.updateState(_this.computeState(), _this.p.props, e, true);
      delete _this.track.notifyOfNext[e.type];
      return null;
    };

    _this.state = {
      // iState is always 1 of 5 strings:
      // 'normal', 'hover', 'hoverActive', 'touchActive', 'keyActive'
      iState: 'normal',
      // focus is always 1 of 4 values: false, 'tab', 'mouse' or 'touch'
      focus: false
    };

    // things to keep track of so RI knows what to do when
    _this.track = {
      touchDown: false,
      recentTouch: false,
      touches: { points: {}, active: 0 },
      mouseOn: false,
      buttonDown: false,
      clickType: 'reset',
      focus: false,
      previousFocus: false,
      reinstateFocus: false,
      focusTransition: 'reset',
      focusStateOnMouseDown: false,
      spaceKeyDown: false,
      enterKeyDown: false,
      drag: false,
      updateTopNode: false,
      notifyOfNext: {},
      timeoutIDs: {},
      state: _this.state
    };

    // the node returned by the ref callback
    _this.refNode = null;
    // the actual top DOM node of `as`, needed when `as` is wrapped in a span (is ReactComponent)
    _this.topNode = null;
    // tagName and type properties of topNode, updated in refCallback
    _this.tagName = typeof props.as === 'string' && props.as || '';
    _this.type = props.type || '';
    // if the topNode is triggered by the enter key, and/or the space bar
    _this.enterKeyTrigger = false;
    _this.spaceKeyTrigger = false;

    // maximum number of touch points where a tap is still possible, updated in propsSetup
    _this.maxTapPoints = 1;

    // the event handlers to pass down as props to the element/component
    _this.eventHandlers = _this.setupEventHandlers();

    // this.p is used to store things that are a deterministic function of props
    // to avoid recalculating every time they are needed, it can be thought of as a pure
    // extension to props and is only updated in the constructor and componentWillReceiveProps
    _this.p = { sameProps: false };
    // set properties of `this.p`
    _this.propsSetup(props);
    // if initialState prop, update state.iState for initial render, note that state.focus
    // will be updated in componentDidMount b/c can't call focus until have ref to DOM node
    if (_this.p.props.initialState && _this.p.props.initialState.iState) {
      _this.forceTrackIState(_this.p.props.initialState.iState);
      _this.state = _this.computeState();
    }
    return _this;
  }

  _createClass(Interactive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // enter focus state if initialState.focus - called here instead of constructor
      // because can't call focus until have ref to DOM node
      if (this.p.props.initialState && this.p.props.initialState.focus !== undefined) {
        this.forceState({ focus: this.p.props.initialState.focus });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // set if the `topNode` needs to be updated in componentDidUpdate => `as` is different
      // and not a string, note that if `as` is a new string, then the `refCallback`
      // will be called by React so no need to do anything in componentDidUpdate
      this.track.updateTopNode = this.props.as !== nextProps.as && typeof this.props.as !== 'string' && typeof nextProps.as !== 'string';

      // check if nextProps are the same as this.props
      this.p.sameProps = false;
      if (!nextProps.mutableProps && (0, _compareProps2.default)(this.props, nextProps)) {
        this.p.sameProps = true;
      } else {
        // if not same props, do props setup => set properties of `this.p`
        this.propsSetup(nextProps);
      }

      // if `forceState` prop, then force update state
      if (this.p.props.forceState) this.forceState(this.p.props.forceState);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // or statement, returns true on first true value, returns false if all are false
      return (
        // return true if props have changed since last render
        !this.p.sameProps && nextProps !== this.props ||
        // always update if there are interactive children
        nextProps.interactiveChild ||
        // if `iState` changed, AND the `style` or `className` for the new `iState` is different,
        // prevents renders when switching b/t two states that have the same `style` and `className`
        nextState.iState !== this.state.iState && (this.p[nextState.iState + 'Style'].style !== this.p[this.state.iState + 'Style'].style || this.p[nextState.iState + 'Style'].className !== this.p[this.state.iState + 'Style'].className) ||
        // if `focus` state changed (always update to work with default style)
        nextState.focus !== this.state.focus
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // `refCallback` isn't called by React when `as` is a component because the span wrapper
      // remains the same element and is not re-mounted in the DOM, so need to call refCallback here
      // if `as` is new and a component (`updateTopNode` was set in componentWillReceiveProps).
      if (this.track.updateTopNode) {
        this.track.updateTopNode = false;
        this.refCallback(this.refNode);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      Object.keys(this.track.notifyOfNext).forEach(function (eType) {
        (0, _notifier.cancelNotifyOfNext)(eType, _this2.track.notifyOfNext[eType]);
      });
      Object.keys(this.track.timeoutIDs).forEach(function (timer) {
        window.clearTimeout(_this2.track.timeoutIDs[timer]);
      });
    }

    // determine event handlers to use based on the device type - only determined once in constructor

  }, {
    key: 'setupEventHandlers',
    value: function setupEventHandlers() {
      var _this3 = this;

      var eventHandlers = {};
      Object.keys(_constants.otherEvents).forEach(function (event) {
        eventHandlers[_constants.otherEvents[event]] = _this3.handleEvent;
      });

      // if the device has touch, set touch event listeners
      if (_constants.deviceHasTouch) {
        Object.keys(_constants.touchEvents).forEach(function (event) {
          eventHandlers[_constants.touchEvents[event]] = _this3.handleEvent;
        });
      }
      // if the device has a mouse, set mouse event listeners
      if (_constants.deviceHasMouse) {
        Object.keys(_constants.mouseEvents).forEach(function (event) {
          eventHandlers[_constants.mouseEvents[event]] = _this3.handleEvent;
        });
      }
      return eventHandlers;
    }

    // returns true if a click listener should be set, called from propsSetup and refCallback

  }, {
    key: 'setClickListener',
    value: function setClickListener(props) {
      // set click listener when there is an onClick prop
      if (props.onClick) return true;
      if (_constants.deviceHasTouch) {
        // set click listener when the element is focusable - this is to correct a bug
        // in Chrome on iOS where it will sometimes, when it is under stress, fire focus and
        // click events without firing a touch event on the document - the result is the focus event
        // will cause RI to enter the focus from tab state errantly, and then the click event will
        // toggle focus off making the correction, so have to listen for click events
        if (props.tabIndex) return true;
        // set click listener when the element has a knownRoleTag, i.e. the browser
        // has a click event handler so preventDefault() needs to be called when the
        // browser sends a click event after RI has canceled tap (e.g. touchTapTimer expired, etc)
        if (_constants.knownRoleTags[this.tagName]) return true;
      }
      return false;
    }

    // find and set the top DOM node of `as`

  }, {
    key: 'propsSetup',


    // setup `this.p`, only called from constructor and componentWillReceiveProps
    value: function propsSetup(props) {
      var _mergeAndExtractProps = (0, _mergeAndExtractProps3.default)(props, _constants.knownProps),
          mergedProps = _mergeAndExtractProps.mergedProps,
          passThroughProps = _mergeAndExtractProps.passThroughProps;

      (0, _extractStyle.setActiveAndFocusProps)(mergedProps);

      // if focus state prop and no tabIndex, then add a tabIndex so RI is focusable by browser
      if (passThroughProps.tabIndex === null) delete passThroughProps.tabIndex;else if (!passThroughProps.tabIndex && (mergedProps.focus || mergedProps.focusFromTab || mergedProps.focusFromMouse || mergedProps.focusFromTouch || mergedProps.onClick)) {
        mergedProps.tabIndex = '0';
        passThroughProps.tabIndex = '0';
      }

      // if onClick prop but it's not clear what the role of the element is then add role="button"
      if (passThroughProps.role === null) delete passThroughProps.role;else if (mergedProps.onClick && !mergedProps.role && typeof mergedProps.as === 'string' && !_constants.knownRoleTags[mergedProps.as]) {
        mergedProps.role = 'button';
        passThroughProps.role = 'button';
      }

      // maximum number of touch points where a tap is still possible
      this.maxTapPoints = mergedProps.onTapFour && 4 || mergedProps.onTapThree && 3 || mergedProps.onTapTwo && 2 || 1;

      // add onClick handler to passThroughProps if it's required
      if (this.setClickListener(mergedProps)) passThroughProps.onClick = this.handleEvent;

      //  add onTouchMove handler to passThroughProps if it's required
      if (_constants.deviceHasTouch && (mergedProps.touchActiveTapOnly || mergedProps.onLongPress || mergedProps.onTouchMove)) {
        passThroughProps.onTouchMove = this.handleEvent;
      }

      // add other event handlers to passThroughProps
      (0, _objectAssign2.default)(passThroughProps, this.eventHandlers);

      this.p.normalStyle = (0, _extractStyle.extractStyle)(mergedProps, 'normal');
      this.p.hoverStyle = (0, _extractStyle.extractStyle)(mergedProps, 'hover');
      this.p.hoverActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'hoverActive');
      this.p.touchActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'touchActive');
      this.p.keyActiveStyle = (0, _extractStyle.extractStyle)(mergedProps, 'keyActive');
      this.p.tabFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromTab');
      this.p.mouseFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromMouse');
      this.p.touchFocusStyle = (0, _extractStyle.extractStyle)(mergedProps, 'focusFromTouch');
      this.p.passThroughProps = passThroughProps;
      this.p.props = mergedProps;
    }

    // keep track of running timeouts so can clear in componentWillUnmount

  }, {
    key: 'manageSetTimeout',
    value: function manageSetTimeout(type, cb, delay) {
      var _this4 = this;

      if (this.track.timeoutIDs[type] !== undefined) {
        window.clearTimeout(this.track.timeoutIDs[type]);
      }
      this.track.timeoutIDs[type] = window.setTimeout(function () {
        delete _this4.track.timeoutIDs[type];
        cb();
      }, delay);
    }
  }, {
    key: 'cancelTimeout',
    value: function cancelTimeout(type) {
      if (this.track.timeoutIDs[type] !== undefined) {
        window.clearTimeout(this.track.timeoutIDs[type]);
        delete this.track.timeoutIDs[type];
      }
    }

    // force set this.track properties based on iState

  }, {
    key: 'forceTrackIState',
    value: function forceTrackIState(iState) {
      if (this.computeState().iState !== iState) {
        this.track.mouseOn = iState === 'hover' || iState === 'hoverActive';
        this.track.buttonDown = iState === 'hoverActive';
        this.track.touchDown = iState === 'touchActive';
        this.track.spaceKeyDown = iState === 'keyActive';
        this.track.enterKeyDown = iState === 'keyActive';
        this.track.drag = false;
      }
    }

    // force set new state

  }, {
    key: 'forceState',
    value: function forceState(newState) {
      // set this.track properties to match new iState
      if (newState.iState !== undefined) this.forceTrackIState(newState.iState);

      // if new focus state, call manageFocus and return b/c focus calls updateState
      if (newState.focus !== undefined && newState.focus !== this.track.state.focus) {
        this.track.focus = newState.focus;
        this.manageFocus(newState.focus ? 'forceStateFocusTrue' : 'forceStateFocusFalse');
        return;
      }

      // update state with new computed state and dummy 'event' that caused state change
      this.updateState(this.computeState(), this.p.props, (0, _constants.dummyEvent)('forcestate'));
    }

    // compute the state based on what's set in `this.track`, returns a new state object
    // note: use the respective active state when drag is true (i.e. dragging the element)

  }, {
    key: 'computeState',
    value: function computeState() {
      var _track = this.track,
          mouseOn = _track.mouseOn,
          buttonDown = _track.buttonDown,
          touchDown = _track.touchDown,
          focus = _track.focus,
          drag = _track.drag;

      var focusKeyDown = focus && (this.track.enterKeyDown && this.enterKeyTrigger || this.track.spaceKeyDown && this.spaceKeyTrigger);
      var newState = { focus: focus };
      if (!mouseOn && !buttonDown && !touchDown && !focusKeyDown && !drag) newState.iState = 'normal';else if (mouseOn && !buttonDown && !touchDown && !focusKeyDown && !drag) {
        newState.iState = 'hover';
      } else if (mouseOn && buttonDown && !touchDown && !focusKeyDown || drag && !touchDown) {
        newState.iState = 'hoverActive';
      } else if (focusKeyDown && !touchDown) newState.iState = 'keyActive';else if (touchDown || drag) newState.iState = 'touchActive';
      return newState;
    }

    // takes a new state, calls setState and the state change callbacks

  }, {
    key: 'updateState',
    value: function updateState(newState, props, event, dontManageNotifyOfNext) {
      if (!dontManageNotifyOfNext) this.manageNotifyOfNext(newState);
      var prevIState = this.track.state.iState;
      var nextIState = newState.iState;
      var iStateChange = nextIState !== prevIState;
      var focusChange = newState.focus !== this.track.state.focus;

      // early return if state doesn't need to change
      if (!iStateChange && !focusChange) return;

      // create new prev and next state objects with immutable values
      var prevState = {
        iState: prevIState,
        focus: this.track.state.focus
      };
      var nextState = {
        iState: nextIState,
        focus: newState.focus
      };

      // call onStateChange prop callback
      props.onStateChange && props.onStateChange({ prevState: prevState, nextState: nextState, event: event });

      // track new state because setState is asyncrounous
      this.track.state = newState;

      // only place that setState is called
      this.setState(newState, props.setStateCallback && props.setStateCallback.bind(this, { prevState: prevState, nextState: nextState }));
    }

    // handles all events - first checks if it's a valid event, then calls the specific
    // type of event handler (to set the proper this.track properties),
    // and at the end calls this.updateState(...)

  }, {
    key: 'isValidEvent',


    // checks if the event is a valid event or not, returns true / false respectivly
    value: function isValidEvent(e) {
      // if it's a known click event then return true
      if (e.type === 'click' && this.track.clickType !== 'reset') return true;
      // if it's a focus/blur event and this Interactive instance is not the target then return true
      if ((e.type === 'focus' || e.type === 'blur') && e.target !== this.topNode) return true;

      // refCallbackFocus calls focus when there is a new top DOM node and RI is already in the
      // focus state to keep the browser's focus state in sync with RI's, so reset and return false
      if (e.type === 'focus' && this.track.focusTransition === 'refCallbackFocus') {
        e.stopPropagation();
        this.track.focusTransition = 'reset';
        return false;
      }

      // if the focusTransition is a force blur and RI is not currently in the focus state,
      // then the force blur is to keep the browser focus state in sync with RI's focus state,
      // so reset the focusTransition and return false, no need to do anything
      // else because the blur event was only for the benefit of the browser, not RI
      if (e.type === 'blur' && this.track.focusTransition === 'focusForceBlur' && !this.track.state.focus) {
        e.stopPropagation();
        this.track.focusTransition = 'reset';
        return false;
      }

      // if the device is touchOnly or a hybrid
      if (_constants.deviceHasTouch) {
        // reject click events that are from touch interactions, unless no active or touchActive prop
        // if no active or touchActive prop, then let the browser determine what is a click from touch
        // this allows for edge taps that don't fire touch events on RI (only click events)
        // so the click event is allowed through when WebkitTapHightlightColor indicates a click
        if (e.type === 'click' && (_inputTracker2.default.touch.recentTouch || _inputTracker2.default.touch.touchOnScreen) && (this.p.props.active || this.p.props.touchActive)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        // reject unknown focus events from touch interactions
        if (e.type === 'focus') {
          if (this.track.focusTransition === 'reset' && (_inputTracker2.default.touch.recentTouch || !this.track.touchDown && _inputTracker2.default.touch.touchOnScreen)) {
            e.preventDefault();
            e.stopPropagation();
            this.manageFocus('focusForceBlur');
            return false;
          }
        }
      }

      if (_constants.deviceType === 'hybrid') {
        // reject mouse events from touch interactions
        if (/mouse/.test(e.type) && (_inputTracker2.default.touch.touchOnScreen || _inputTracker2.default.touch.recentTouch)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      return true;
    }

    // notifyOfNext plugs the holes in the events fired by the browser on the RI element,
    // in some situations the browser fails to fire the necessary event leaving RI stuck
    // in the wrong state (a not normal iState), so sign up to be notified of the next global event
    // and do some checks (in handleNotifyOfNext) to confirm RI is in the correct state,
    // note that notifyOfNext only while not in the normal state makes the notifier O(1) instead of
    // O(n), where n is the number of mounted RI components

  }, {
    key: 'manageNotifyOfNext',
    value: function manageNotifyOfNext(newState) {
      var _this5 = this;

      // set notifyOfNext
      var setNON = function setNON(eType) {
        if (!_this5.track.notifyOfNext[eType]) {
          _this5.track.notifyOfNext[eType] = (0, _notifier.notifyOfNext)(eType, _this5.handleNotifyOfNext);
        }
      };
      // cancel notifyOfNext
      var cancelNON = function cancelNON(eType) {
        if (_this5.track.notifyOfNext[eType]) {
          (0, _notifier.cancelNotifyOfNext)(eType, _this5.track.notifyOfNext[eType]);
          delete _this5.track.notifyOfNext[eType];
        }
      };

      if (_constants.deviceHasMouse) {
        // if not in the normal state and not dragging, then set notifyOfNext, otherwise cancel
        var shouldSetNON = newState.iState !== 'normal' && !this.track.drag;

        // check mouse position on document mouseenter to prevent from sticking in
        // the hover state after switching to another app/window, moving the mouse,
        // and then switching  back (so the mouse is no longer over the element)
        shouldSetNON ? setNON('mouseenter') : cancelNON('mouseenter');

        // the dragstart event on an element fires after a short delay, so it is possible to
        // start dragging an element and have the mouseenter another element putting it in the
        // hoverActive state before the dragstart event fires (after the dragstart event
        // no other mouse events are fired), so sign up for next global dragstart to force intro
        // normal state while another element is being dragged
        shouldSetNON ? setNON('dragstart') : cancelNON('dragstart');

        // the scroll listener provides a minor improvement to accuracy by exiting the hover state
        // as soon as the mouse is scrolled off an element instead of waiting for the scrolling to end
        // only set as a passive listener as the improvement is not worth it if it hurts performance
        if (_constants.passiveEventSupport) {
          shouldSetNON ? setNON('scroll') : cancelNON('scroll');
        }

        // if the mouse is on RI, then sign up for next DOM mutation event, which could
        // move the mouse off of RI (by changing the layout of the page)
        // without firing a mouseleave event (because the mouse never moved)
        this.track.mouseOn ? setNON('mutation') : cancelNON('mutation');
      }

      if (_constants.deviceHasTouch) {
        // cancel tap when touch someplace else on the screen
        newState.iState === 'touchActive' ? this.p.props.extraTouchNoTap && setNON('touchstart') : cancelNON('touchstart');
      }

      // notify of next setup for maintaining correct focusFrom when switching apps/windows,
      // if exiting the focus state, notify of the next window blur (leaving the app/window/tab)
      // event if it immediately follows this event, otherwise cancel the notify of next
      if (this.track.state.focus && !newState.focus) {
        setNON('blur');
        this.manageSetTimeout('elementBlur', function () {
          _this5.track.previousFocus = false;
          cancelNON('blur');
        }, _constants.queueTime);
      }
    }
  }, {
    key: 'checkMousePosition',


    // check the mouse position relative to the RI element on the page
    value: function checkMousePosition(e) {
      if (!_constants.deviceHasMouse) return null;

      var mouseX = e && e.clientX || _inputTracker2.default.mouse.clientX;
      var mouseY = e && e.clientY || _inputTracker2.default.mouse.clientY;
      function mouseOnNode(node) {
        var rect = node.getBoundingClientRect();
        return mouseX >= rect.left - 1 && mouseX <= rect.right + 1 && mouseY >= rect.top - 1 && mouseY <= rect.bottom + 1;
      }

      var mouseOn = true;

      if (!_inputTracker2.default.mouse.mouseOnDocument) {
        mouseOn = false;
      } else if (!this.p.props.nonContainedChild) {
        mouseOn = mouseOnNode(this.topNode);
      } else {
        // if the nonContainedChild prop is present, then do a recursive check of the node and its
        // children until the mouse is on a node or all children are checked,
        // this is useful when the children aren't inside of the parent on the page
        mouseOn = (0, _recursiveNodeCheck2.default)(this.topNode, mouseOnNode);
      }

      return mouseOn ? 'mouseOn' : 'mouseOff';
    }

    // check to see if a focusTransition is necessary and update this.track.focusTransition
    // returns 'terminate' if handleEvent should terminate, returns 'updateState'
    // if handleEvent should continue and call updateState this time through
    // focus event lifecycle:
    // - browser calls focus -> onFocus listener triggered
    // - RI calls focus (using manageFocus) -> set focusTransition -> onFocus listener triggered
    // - RI event handler uses track.focusTransition to determine if the focus event is:
    //   - not a valid event (in isValidEvent)
    //     - sent from RI to keep browser focus in sync with RI -> reset focusTransition -> end
    //     - errant -> call blur to keep browser in sync, set focusTransition to focusForceBlur -> end
    //   - a valid event
    //     - sent from RI -> reset focusTransition -> RI enters the focus state w/ focus
    //       based on the focusTransition
    //     - sent from browser -> RI enters the focus state w/ focus set to 'tab'
    // - browser calls blur -> onBlur listener triggered
    // - RI calls blur (using manageFocus) -> set focusTransition -> onBlur listener triggered
    // - RI event handler uses track.focusTransition to determine if the blur event is:
    //   - not a valid event (in isValidEvent)
    //     - a force blur to keep the browser focus state in sync -> reset focusTransition -> end
    //       (if it's a force blur meant for both RI and the browser, then it's a valid event)
    //   - eveything else -> reset focusTransition -> RI leaves focus state

  }, {
    key: 'manageFocus',
    value: function manageFocus(type, e) {
      var _this6 = this;

      // if this exact event has already been used for focus/blur by another instance of Interactive
      // i.e. a child and the event is bubbling, then don't manage focus and return updateState
      if (e && (_inputTracker.focusRegistry.focus === e || _inputTracker.focusRegistry.blur === e)) return 'updateState';

      // is the DOM node tag blurable for toggle focus
      var tagIsBlurable = !_constants.nonBlurrableTags[this.tagName] && !this.p.props.focusToggleOff;
      // is the node focusable, if there is a focus or tabIndex prop, or it's non-blurable, then it is
      var tagIsFocusable = this.p.props.tabIndex || _constants.knownRoleTags[this.tagName];

      // calls focus/blur to transition focus, returns 'terminate' if focus/blur call is made
      // because focus/blur event handler called updateState,
      // returns 'updateState' if not allowed to make specified transition, so RI will continue
      // to updateState this time through handleEvent
      var focusTransition = function focusTransition(event, transitionAs, force) {
        if (force === 'force' || event === 'focus' && tagIsFocusable || event === 'blur' && tagIsBlurable) {
          // if the manageFocus call is from a browser event (i.e. will bubble), register it
          if (e) {
            _inputTracker.focusRegistry[event] = e;
            // reset event registry after bubbling has finished because React reuses events so
            // future event equality checks may give a false positive if not reset
            _this6.manageSetTimeout('focusRegistry', function () {
              _inputTracker.focusRegistry[event] = null;
            }, 0);
          }
          _this6.track.focusTransition = transitionAs;
          _this6.topNode[event]();
          // if focusTransition has changed, then the focus/blur call was sucessful so terminate
          if (_this6.track.focusTransition !== transitionAs) {
            return 'terminate';
          }
        }
        _this6.track.focusTransition = 'reset';
        return 'updateState';
      };

      // toggles focus by calling focusTransition, returns focusTransition's return
      var toggleFocus = function toggleFocus(toggleAs, force) {
        if (_this6.track.state.focus) return focusTransition('blur', toggleAs + 'Blur', force);
        return focusTransition('focus', toggleAs + 'Focus', force);
      };

      switch (type) {
        case 'mousedown':
          return focusTransition('focus', 'mouseDownFocus');
        case 'mouseup':
          // blur only if focus was not initiated on the preceding mousedown,
          if (this.track.focusStateOnMouseDown) return focusTransition('blur', 'mouseUpBlur');
          this.track.focusTransition = 'reset';
          return 'updateState';
        case 'touchclick':
          return toggleFocus('touchClick');
        case 'forceStateFocusTrue':
          // setTimeout because React misses focus calls made during componentWillReceiveProps,
          // which is where forceState calls come from (the browser receives the focus call
          // but not React), so have to call focus asyncrounsly so React receives it
          this.manageSetTimeout('forceStateFocusTrue', function () {
            !_this6.track.state.focus && focusTransition('focus', 'forceStateFocus', 'force');
          }, 0);
          return 'terminate';
        case 'forceStateFocusFalse':
          // same as forceStateFocusTrue, but for focus false
          this.manageSetTimeout('forceStateFocusFalse', function () {
            _this6.track.state.focus && focusTransition('blur', 'forceStateBlur', 'force');
          }, 0);
          return 'terminate';
        case 'refCallback':
          // if in the focus state and RI has a new topDOMNode, then call focus() on `this.topNode`
          // to keep the browser focus state in sync with RI's focus state
          if (this.track.state.focus) return focusTransition('focus', 'refCallbackFocus', 'force');
          this.track.focusTransition = 'reset';
          return 'terminate';
        case 'focusForceBlur':
          return focusTransition('blur', 'focusForceBlur', 'force');
        default:
          return 'updateState';
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)

  }, {
    key: 'handleMouseEvent',
    value: function handleMouseEvent(e) {
      switch (e.type) {
        case 'mouseenter':
          (0, _inputTracker.updateMouseFromRI)(e);
          this.p.props.onMouseEnter && this.p.props.onMouseEnter(e);
          this.track.mouseOn = true;
          this.track.buttonDown = e.buttons === 1;
          return 'updateState';
        case 'mouseleave':
          (0, _inputTracker.updateMouseFromRI)(e);
          this.p.props.onMouseLeave && this.p.props.onMouseLeave(e);
          this.track.mouseOn = false;
          this.track.buttonDown = false;
          return 'updateState';
        case 'mousemove':
          this.p.props.onMouseMove && this.p.props.onMouseMove(e);
          // early return for mouse move
          if (this.track.mouseOn && this.track.buttonDown === (e.buttons === 1)) return 'terminate';
          this.track.mouseOn = true;
          this.track.buttonDown = e.buttons === 1;
          return 'updateState';
        case 'mousedown':
          this.p.props.onMouseDown && this.p.props.onMouseDown(e);
          this.track.mouseOn = true;
          this.track.buttonDown = true;
          // track focus state on mousedown to know if should blur on mouseup
          this.track.focusStateOnMouseDown = this.track.state.focus;
          return this.manageFocus('mousedown', e);
        case 'mouseup':
          {
            this.p.props.onMouseUp && this.p.props.onMouseUp(e);
            this.track.buttonDown = false;
            var manageFocusReturn = this.manageFocus('mouseup', e);
            this.manageClick('mouseClick');
            return manageFocusReturn;
          }
        default:
          return 'terminate';
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)
    // note that a touch interaction lasts from the start of the first touch point on RI,
    // until removal of the last touch point on RI, and then the touch interaction is reset

  }, {
    key: 'handleTouchEvent',
    value: function handleTouchEvent(e) {
      var _this7 = this;

      // reset mouse trackers
      this.track.mouseOn = false;
      this.track.buttonDown = false;

      // reset touch interaction tracking, called when there are no more touches on the target
      var resetTouchInteraction = function resetTouchInteraction() {
        _this7.track.touchDown = false;
        _this7.track.touches = { points: {}, active: 0 };
        // clear the touchTapTimer if it's running
        _this7.cancelTimeout('touchTapTimer');
      };

      // track recent touch, called from touchend and touchcancel
      var recentTouch = function recentTouch() {
        _this7.track.recentTouch = true;
        _this7.manageSetTimeout('recentTouchTimer', function () {
          _this7.track.recentTouch = false;
        }, _constants.queueTime);
      };

      // returns true if there are extra touches on the screen
      var extraTouches = function extraTouches() {
        return (
          // if extraTouchNoTap prop and also touching someplace else on the screen, or
          _this7.p.props.extraTouchNoTap && e.touches.length !== _this7.track.touches.active ||
          // more touches on RI than maxTapPoints
          _this7.track.touches.active > _this7.maxTapPoints
        );
      };

      // returns true if a touch point has moved more than is allowed for a tap
      var touchMoved = function touchMoved(endTouch, startTouch, numberOfPoints) {
        return Math.abs(endTouch.clientX - startTouch.startX) >= 15 + 3 * numberOfPoints || Math.abs(endTouch.clientY - startTouch.startY) >= 15 + 3 * numberOfPoints;
      };

      // log touch position for each touch point that is part of the touch event
      var logTouchCoordsAs = function logTouchCoordsAs(logAs) {
        for (var i = 0; i < e.changedTouches.length; i++) {
          var point = _this7.track.touches.points[e.changedTouches[i].identifier] || {};
          point[logAs + 'X'] = e.changedTouches[i].clientX;
          point[logAs + 'Y'] = e.changedTouches[i].clientY;
          _this7.track.touches.points[e.changedTouches[i].identifier] = point;
        }
      };

      switch (e.type) {
        case 'touchstart':
          {
            this.p.props.onTouchStart && this.p.props.onTouchStart(e);
            // update number of active touches
            this.track.touches.active += e.changedTouches.length;
            if (this.track.touches.tapCanceled) return 'terminate';
            var newTouchDown = !this.track.touchDown;
            this.track.touchDown = true;
            // cancel tap if there was already a touchend in this interaction or there are extra touches
            if (this.track.touches.touchend || extraTouches()) {
              // recursively call handleTouchEvent with a touchtapcancel event to set track properties,
              // call handleTouchEvent directly don't go through handleEvent so updateState isn't called
              return this.handleTouchEvent({ type: 'touchtapcancel' }) === 'updateState' || newTouchDown ? 'updateState' : 'terminate';
            }

            // if going from no touch to touch, set touchTapTimer
            if (newTouchDown) {
              e.persist();
              this.manageSetTimeout('touchTapTimer', function () {
                // if the timer finishes then call onLongPress callback and
                // fire a touchtapcancel event to cancel the tap,
                // because this goes through handleEvent, updateState will be called if needed
                _this7.p.props.onLongPress && _this7.p.props.onLongPress(e);
                _this7.handleEvent((0, _constants.dummyEvent)('touchtapcancel'));
              }, this.p.props.tapTimeCutoff);
            }

            // log touch start position
            logTouchCoordsAs('start');
            return 'updateState';
          }

        case 'touchmove':
          this.p.props.onTouchMove && this.p.props.onTouchMove(e);
          if (this.track.touches.tapCanceled) return 'terminate';
          // cancel tap if there are extra touches
          if (extraTouches()) return this.handleTouchEvent({ type: 'touchtapcancel' });

          // if touchActiveTapOnly or onLongPress prop,
          // check to see if the touch moved enough to cancel tap
          if (this.p.props.touchActiveTapOnly || this.p.props.onLongPress) {
            for (var i = 0; i < e.changedTouches.length; i++) {
              var touch = this.track.touches.points[e.changedTouches[i].identifier];
              if (touch && touchMoved(e.changedTouches[i], touch, this.maxTapPoints)) {
                return this.handleTouchEvent({ type: 'touchtapcancel' });
              }
            }
          }
          return 'terminate';

        case 'touchend':
          // start recent touch timer
          recentTouch();
          this.p.props.onTouchEnd && this.p.props.onTouchEnd(e);
          // update number of active touches
          this.track.touches.active -= e.changedTouches.length;
          // if a touch event was dropped somewhere, i.e.
          // cumulative length of changed touches for touchstarts !== touchends, then reset
          if (this.track.touches.active < 0 || e.touches.length === 0 && this.track.touches.active > 0) {
            resetTouchInteraction();
            return 'updateState';
          }

          // track that there has been a touchend in this touch interaction
          this.track.touches.touchend = true;

          // check to see if tap is already canceled or should be canceled
          if (this.track.touches.active === 0 && (this.track.touches.tapCanceled || extraTouches())) {
            resetTouchInteraction();
            return 'updateState';
          } else if (this.track.touches.tapCanceled) return 'terminate';else if (extraTouches()) return this.handleTouchEvent({ type: 'touchtapcancel' });

          // log touch end position
          logTouchCoordsAs('client');

          // if there are no remaining touches, then process the touch interaction
          if (this.track.touches.active === 0) {
            var touches = this.track.touches.points;
            var touchKeys = Object.keys(touches);
            var count = touchKeys.length;

            // determine if there was a tap and number of touch points for the tap
            // if every touch point hasn't moved, set tapTouchPoints to count
            var tapTouchPoints = touchKeys.every(function (touch) {
              return !touchMoved(touches[touch], touches[touch], count);
            }) ? count : 0;

            // reset the touch interaction
            resetTouchInteraction();

            switch (tapTouchPoints) {
              case 1:
                {
                  var manageFocusReturn = 'updateState';
                  // if no active or touchActive prop, let the browser handle click events
                  if (this.p.props.active || this.p.props.touchActive) {
                    manageFocusReturn = this.manageFocus('touchclick', e);
                    this.manageClick('tapClick');
                  }
                  return manageFocusReturn;
                }
              case 2:
                this.p.props.onTapTwo && this.p.props.onTapTwo(e);
                break;
              case 3:
                this.p.props.onTapThree && this.p.props.onTapThree(e);
                break;
              case 4:
                this.p.props.onTapFour && this.p.props.onTapFour(e);
                break;
              default:
            }
          }
          return 'updateState';

        case 'touchcancel':
          recentTouch();
          this.p.props.onTouchCancel && this.p.props.onTouchCancel(e);
          this.track.touches.active -= e.changedTouches.length;

          // if there are no remaining touches, then reset the touch interaction
          if (this.track.touches.active === 0) {
            resetTouchInteraction();
            return 'updateState';
          }

          // cancel tap and return whatever touchtapcancel says todo
          return this.handleTouchEvent({ type: 'touchtapcancel' });

        // cancel tap for this touch interaction
        case 'touchtapcancel':
          // clear the touchTapTimer if it's running
          this.cancelTimeout('touchTapTimer');
          if (this.track.touchDown) {
            // set the tap event to canceled
            this.track.touches.tapCanceled = true;
            if (this.p.props.touchActiveTapOnly) {
              // if touchActiveTapOnly prop, exit the touchActive state and updateState
              this.track.touchDown = false;
              return 'updateState';
            }
          }
          return 'terminate';
        default:
          return 'terminate';
      }
    }

    // called in anticipation of a click event (before it's fired) to track the source
    // of the click event (mouse, touch, key), and synthetically call node.click() if needed

  }, {
    key: 'manageClick',
    value: function manageClick(type) {
      var _this8 = this;

      // clear clickType timer if it's running
      this.cancelTimeout('clickType');

      // timer to reset the clickType,
      // when it's left to the browser to call click(), the browser has queueTime
      // to add the click event to the queue for it to be recognized as a known click event
      var setClickTypeTimer = function setClickTypeTimer() {
        _this8.manageSetTimeout('clickType', function () {
          _this8.track.clickType = 'reset';
        }, _constants.queueTime);
      };

      switch (type) {
        case 'mouseClick':
          this.track.clickType = 'mouseClick';
          // let the browser call click() for mouse interactions
          setClickTypeTimer();
          break;
        case 'tapClick':
          this.track.clickType = 'tapClick';
          // for touch interactions, use syntheticClick to call node.click() now and
          // block the subsequent click event created by the browser if there is one
          (0, _syntheticClick2.default)(this.topNode);
          this.track.clickType = 'reset';
          break;
        case 'keyClick':
          this.track.clickType = 'keyClick';
          // if the element has a known interactive role (a, button, input, etc),
          // then let the browser call click() for keyClick interactions (enter key and/or space bar)
          if (_constants.knownRoleTags[this.tagName]) {
            setClickTypeTimer();

            // if the element doesn't have a known interactive role, but there is an onClick prop,
            // then call node.click() directly as the browser won't fire a click event
            // from a keyClick interaction
          } else if (this.p.props.onClick) {
            this.topNode.click();
            this.track.clickType = 'reset';
          }
          break;
        default:
      }
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)
    // in almost cases this will return terminate as click events don't change state,
    // the one exception is an unknown but valid click event from a touch interaction,
    // which will need to manageFocus, and then return whatever manageFocus says to do

  }, {
    key: 'handleClickEvent',
    value: function handleClickEvent(e) {
      // clear clickType timer if running
      this.cancelTimeout('clickType');
      var returnValue = 'terminate';
      // if this is an unknown click event, make some assumptions
      if (this.track.clickType === 'reset') {
        // unknown click event on a form submit input with a recentEnterKeyDown on the document
        // is considered to be a keyClick (when you press enter to submit a form
        // but focus is not on the submit button)
        var enterKeyFormSubmit = this.tagName === 'input' && this.type === 'submit' && _inputTracker2.default.key.recentEnterKeyDown;
        if (enterKeyFormSubmit) this.track.clickType = 'keyClick';else if (_inputTracker2.default.touch.recentTouch || _inputTracker2.default.touch.touchOnScreen || _constants.deviceType === 'touchOnly') {
          // if there is a recent touch on the document,
          // or this is a unknown synthetic click event on a touchOnly device
          returnValue = this.manageFocus('touchclick', e);
          this.track.keyClick = 'tapClick';
          // else this is a unknown synthetic click event on a mouseOnly or hybrid device
        } else this.track.keyClick = 'mouseClick';
      }

      // focus is not called on touch tap with links that open in a new window
      // on pages that have been navigated to with pushState (only tested react router).
      // So need to simulate a previous focus state of touch and a window blur event by
      // signing up to be notified of next window focus event.
      // Note that if navigated to www.example.tld/some-page with pushState link (e.g. RR Link)
      // then focus is not called on tap, but if do a fresh page load for www.example.tld/some-page
      // then focus is called on tap before opening the link in a new window (which is really weird).
      // Note that focus not called means the browser doesn't respect focus calls generated by RI
      // (and the browser may not generate a focus call itself, results varied by browser).
      // This is only a problem on Android Chrome because despite not calling focus on link tap,
      // upon returning to the window, focus is called on the element putting it
      // into the focusFromTab state, when it should be in the focusFromTouch state.
      if (this.p.props.target === '_blank' && this.track.clickType === 'tapClick' && !this.track.notifyOfNext.focus) {
        this.track.previousFocus = 'touch';
        this.track.notifyOfNext.focus = (0, _notifier.notifyOfNext)('focus', this.handleNotifyOfNext);
      }

      // call onClick handler and pass in clickType (mouseClick, tapClick, keyClick) as 2nd argument
      this.p.props.onClick && this.p.props.onClick(e, this.track.clickType);
      this.track.clickType = 'reset';
      return returnValue;
    }

    // returns 'terminate' if the caller (this.handleEvent) should not call updateState(...)

  }, {
    key: 'handleOtherEvent',
    value: function handleOtherEvent(e) {
      switch (e.type) {
        case 'focus':
          this.p.props.onFocus && this.p.props.onFocus(e);

          // if this instance of RI is not the focus target, then don't enter the focus state
          if (e.target !== this.topNode) return 'terminate';

          // if this is a known focusTransition or focus is false,
          // then set focus based on the type of focusTransition,
          if (this.track.focusTransition !== 'reset' || !this.track.focus) {
            var focusTransition = this.track.focusTransition.toLowerCase();
            if (/mouse/.test(focusTransition)) {
              this.track.focus = 'mouse';
            } else if (/touch/.test(focusTransition) || this.track.touchDown) {
              this.track.focus = 'touch';
            } else if (this.track.reinstateFocus) {
              this.track.focus = this.track.previousFocus;
            } else if (!/forcestate/.test(focusTransition)) {
              this.track.focus = 'tab';
            }
          }

          // if there was a timer set by a recent window focus event, clear it
          this.cancelTimeout('windowFocus');
          // only reinstate focus from window blur/focus for next focus event
          this.track.reinstateFocus = false;

          this.track.focusTransition = 'reset';
          return 'updateState';
        case 'blur':
          this.p.props.onBlur && this.p.props.onBlur(e);
          if (e.target !== this.topNode) return 'terminate';
          this.track.focusTransition = 'reset';
          this.track.previousFocus = this.track.focus;
          this.track.focus = false;
          this.track.spaceKeyDown = false;
          this.track.enterKeyDown = false;
          return 'updateState';
        case 'keydown':
          this.p.props.onKeyDown && this.p.props.onKeyDown(e);
          if (!this.track.focus) return 'terminate';
          if (e.key === ' ') this.track.spaceKeyDown = true;else if (e.key === 'Enter') {
            this.track.enterKeyDown = true;
            if (this.enterKeyTrigger) this.manageClick('keyClick');
          } else return 'terminate';
          return 'updateState';
        case 'keyup':
          this.p.props.onKeyUp && this.p.props.onKeyUp(e);
          if (!this.track.focus) return 'terminate';
          if (e.key === 'Enter') this.track.enterKeyDown = false;else if (e.key === ' ') {
            this.track.spaceKeyDown = false;
            if (this.spaceKeyTrigger) this.manageClick('keyClick');
          } else return 'terminate';
          return 'updateState';
        case 'dragstart':
          this.p.props.onDragStart && this.p.props.onDragStart(e);
          this.track.drag = true;
          return 'updateState';
        case 'dragend':
          this.p.props.onDragEnd && this.p.props.onDragEnd(e);
          this.forceTrackIState('normal');
          return 'updateState';
        default:
          return 'terminate';
      }
    }
  }, {
    key: 'computeStyle',
    value: function computeStyle() {
      // build style object, priority order: state styles, style prop, default styles
      var style = {};
      // add default styles first:
      // if focusFromTab prop provided, then reset browser focus style,
      // otherwise only reset it when focus is not from tab
      if (!this.p.props.useBrowserOutlineFocus && (this.p.props.focusFromTab || this.state.focus !== 'tab' && !_constants.nonBlurrableTags[this.tagName])) {
        style.outline = 0;
        style.outlineOffset = 0;
      }
      // if touchActive or active prop provided, then reset webkit tap highlight style
      if ((this.p.props.touchActive || this.p.props.active) && _constants.deviceHasTouch) {
        style.WebkitTapHighlightColor = 'rgba(0, 0, 0, 0)';
      }
      // set cursor to pointer if clicking does something
      var lowerAs = typeof this.p.props.as === 'string' && this.p.props.as.toLowerCase();
      if (!this.p.props.useBrowserCursor && (this.p.props.onClick || lowerAs !== 'input' && this.p.props.tabIndex && (this.p.mouseFocusStyle.style || this.p.mouseFocusStyle.className) || lowerAs === 'input' && (this.p.props.type === 'checkbox' || this.p.props.type === 'radio' || this.p.props.type === 'submit') || lowerAs === 'button' || lowerAs === 'a' || lowerAs === 'area' || lowerAs === 'select') && !this.p.props.disabled) {
        style.cursor = 'pointer';
      }

      // add style prop styles second:
      (0, _objectAssign2.default)(style, this.p.props.style);

      // add iState and focus state styles third:
      // focus has priority over iState styles unless overridden in stylePriority
      var hasPriority = this.state.iState === 'keyActive' || this.p.props.stylePriority && this.p.props.stylePriority[this.state.iState];
      var iStateStyle = this.p[this.state.iState + 'Style'].style;
      var focusStyle = this.state.focus ? this.p[this.state.focus + 'FocusStyle'].style : null;
      if (hasPriority) {
        (0, _objectAssign2.default)(style, focusStyle, iStateStyle);
      } else {
        (0, _objectAssign2.default)(style, iStateStyle, focusStyle);
      }
      return style;
    }
  }, {
    key: 'computeClassName',
    value: function computeClassName() {
      // build className string, union of class names from className prop, iState className,
      // and focus className (if in the focus state)
      return (0, _extractStyle.joinClasses)(this.p.props.className || '', this.p[this.state.iState + 'Style'].className, this.state.focus ? this.p[this.state.focus + 'FocusStyle'].className : '');
    }

    // compute children when there is an interactiveChild prop, returns the new children

  }, {
    key: 'computeChildren',
    value: function computeChildren() {
      var _this9 = this;

      // convert this.state.focus to the string focusFrom[Type] for use later
      var focusFrom = this.state.focus && 'focusFrom' + this.state.focus.charAt(0).toUpperCase() + this.state.focus.slice(1);
      // does the current iState style have priority over the focus state style
      var iStateStylePriority = this.p.props.stylePriority && this.p.props.stylePriority[this.state.iState];

      var computeChildStyle = function computeChildStyle(props) {
        var style = props.style ? _extends({}, props.style) : {};
        (0, _extractStyle.setActiveAndFocusProps)(props);
        var iStateStyle = (0, _extractStyle.extractStyle)(props, _this9.state.iState);
        var focusStyle = _this9.state.focus && (0, _extractStyle.extractStyle)(props, focusFrom);

        return {
          className: (0, _extractStyle.joinClasses)(props.className || '', iStateStyle.className, focusStyle && focusStyle.className || ''),
          style: iStateStylePriority && (0, _objectAssign2.default)(style, focusStyle.style, iStateStyle.style) || (0, _objectAssign2.default)(style, iStateStyle.style, focusStyle.style)
        };
      };

      // recurse and map children, if child is an Interactive component, then don't recurse into
      // it's children
      var recursiveMap = function recursiveMap(children) {
        return _react2.default.Children.map(children, function (child) {
          if (!_react2.default.isValidElement(child)) return child;

          // if the child should not be shown, then return null
          if (child.props.showOnParent) {
            var showOn = child.props.showOnParent.split(' ');
            if (!showOn.some(function (el) {
              return el === _this9.state.iState || /Active/.test(_this9.state.iState) && el === 'active' || _this9.state.focus && (el === focusFrom || el === 'focus');
            })) {
              return null;
            }
          }

          var childPropKeys = Object.keys(child.props);

          // if the child doesn't have any interactive child props, then return the child
          if (!childPropKeys.some(function (key) {
            return _constants.childInteractiveProps[key];
          })) {
            if (child.type === Interactive) return child;
            // if the child is not an Interactive component, then still recuse into its children
            return _react2.default.cloneElement(child, {}, recursiveMap(child.props.children));
          }

          var newChildProps = {};
          var childStyleProps = {};
          // separate child props to pass through (newChildProps), from props used
          // to compute the child's style (childStyleProps)
          childPropKeys.forEach(function (key) {
            if (!_constants.childInteractiveProps[key]) newChildProps[key] = child.props[key];else if (key !== 'showOnParent') {
              childStyleProps['' + key.slice(8).charAt(0).toLowerCase() + key.slice(9)] = child.props[key];
            }
          });

          childStyleProps.style = child.props.style;
          childStyleProps.className = child.props.className;

          var _computeChildStyle = computeChildStyle(childStyleProps),
              style = _computeChildStyle.style,
              className = _computeChildStyle.className;

          newChildProps.style = style;
          if (className) newChildProps.className = className;

          // can't use cloneElement because not possible to delete existing child prop,
          // e.g. need to delete the prop onParentHover from the child
          return _react2.default.createElement(child.type, newChildProps, child.type === Interactive ? child.props.children : recursiveMap(child.props.children));
        });
      };

      return recursiveMap(this.p.props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      // props to pass down:
      // passThroughProps (includes event handlers)
      // style
      // className
      this.p.passThroughProps.style = this.computeStyle();
      var className = this.computeClassName();
      if (className) this.p.passThroughProps.className = className;

      var children = this.p.props.interactiveChild ? this.computeChildren() : this.p.props.children;

      // if `as` is a string (i.e. DOM tag name), then add the ref to props and render `as`
      if (typeof this.p.props.as === 'string') {
        this.p.passThroughProps.ref = this.refCallback;
        return _react2.default.createElement(this.p.props.as, this.p.passThroughProps, children);
      }
      // If `as` is a ReactClass or a ReactFunctionalComponent, then wrap it in a span
      // so can access the DOM node without breaking encapsulation
      return _react2.default.createElement('span', {
        ref: this.refCallback,
        style: this.p.props.wrapperStyle,
        className: this.p.props.wrapperClassName
      }, _react2.default.createElement(this.p.props.as, this.p.passThroughProps, children));
    }
  }]);

  return Interactive;
}(_react2.default.Component);

Interactive.propTypes = _propTypes.propTypes;
Interactive.defaultProps = _propTypes.defaultProps;
exports.default = Interactive;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function statePropsExcept(state) {
  var statePropsCopy = _extends({}, _constants.stateProps);
  delete statePropsCopy[state];
  return Object.keys(statePropsCopy);
}

var iStatesShape = {};
Object.keys(_constants.iStates).forEach(function (iState) {
  iStatesShape[iState] = _propTypes2.default.bool;
});

var propTypes = {
  as: _propTypes2.default.any.isRequired,
  children: _propTypes2.default.node,
  normal: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('normal'))]),
  hover: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('hover'))]),
  active: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('active'))]),
  hoverActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('hoverActive'))]),
  touchActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('touchActive'))]),
  keyActive: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('keyActive'))]),
  focus: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focus'))]),
  focusFromTab: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromTab'))]),
  focusFromTouch: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromTouch'))]),
  focusFromMouse: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.oneOf(statePropsExcept('focusFromMouse'))]),
  forceState: _propTypes2.default.shape({
    iState: _propTypes2.default.oneOf(Object.keys(_constants.iStates)),
    focus: _propTypes2.default.oneOf([false, 'tab', 'mouse', 'touch'])
  }),
  initialState: _propTypes2.default.shape({
    iState: _propTypes2.default.oneOf(Object.keys(_constants.iStates)),
    focus: _propTypes2.default.oneOf([false, 'tab', 'mouse', 'touch'])
  }),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  wrapperStyle: _propTypes2.default.object,
  wrapperClassName: _propTypes2.default.string,
  onStateChange: _propTypes2.default.func,
  setStateCallback: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onTapTwo: _propTypes2.default.func,
  onTapThree: _propTypes2.default.func,
  onTapFour: _propTypes2.default.func,
  tapTimeCutoff: _propTypes2.default.number,

  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseMove: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onTouchMove: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchCancel: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,

  mutableProps: _propTypes2.default.bool,
  refDOMNode: _propTypes2.default.func,
  tabIndex: _propTypes2.default.string,
  useBrowserOutlineFocus: _propTypes2.default.bool,
  useBrowserCursor: _propTypes2.default.bool,
  touchActiveTapOnly: _propTypes2.default.bool,
  extraTouchNoTap: _propTypes2.default.bool,
  focusToggleOff: _propTypes2.default.bool,
  stylePriority: _propTypes2.default.shape(iStatesShape),
  nonContainedChild: _propTypes2.default.bool,
  interactiveChild: _propTypes2.default.bool
};

var defaultProps = {
  tapTimeCutoff: _constants.defaultTapTimeCutoff
};

exports.propTypes = propTypes;
exports.defaultProps = defaultProps;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(14)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var warning = __webpack_require__(8);
var assign = __webpack_require__(7);

var ReactPropTypesSecret = __webpack_require__(5);
var checkPropTypes = __webpack_require__(13);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(4);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(5);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var ReactPropTypesSecret = __webpack_require__(5);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectHover = __webpack_require__(16);

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(17);

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(18);

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(19);

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectHover.hover && 'mouse' || detectIt.state.detectHover.none && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';

      // issue with Windows Chrome on hybrid devices starting in version 59 where
      // media queries represent a touch only device, so if the browser is an
      // affected Windows Chrome version and hasTouch,
      // then assume it's a hybrid with primaryInput mouse
      // see https://github.com/rafrex/detect-it/issues/8
      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10) >= 59;

      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {
        detectIt.deviceType = 'hybrid';
        detectIt.hasMouse = true;
        detectIt.primaryInput = 'mouse';
      }
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports.default = detectIt;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectHover = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports.default = detectHover;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectPointer = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports.default = detectPointer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectTouchEvents = {
  update: function update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports.default = detectTouchEvents;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareProps;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shallow compare of two sets of props, can be called recursivly,
// returns true if the props are the same, and false if they are not the same
function compareProps(propsA, propsB) {
  // If children are ReactElements, e.g. JSX as opposed to strings,
  // they will not be equal even if they are the same because React.createElement(...)
  // returns a new instance every time and is usually called on every render,
  // so unless there is a deep compare of the ReactElement tree of children,
  // it doesn't make sense to continue checking other props.
  // Note, that when nothing has changed in props,
  // the only thing that's not equal are the children, so check first.
  if (propsA.children !== propsB.children) return false;

  var keysB = Object.keys(propsB);

  // don't include forceState when comparing props
  // forceState is handled in componentWillReceiveProps
  var nextPOffset = propsB.forceState ? -1 : 0;
  var pOffset = propsA.forceState ? -1 : 0;
  if (keysB.length + nextPOffset !== Object.keys(propsA).length + pOffset) return false;

  // if it's an state prop options object, then shallow compare the options for equality
  var sameStateProp = function sameStateProp(stateProp) {
    // if propsB doesn't have any of the options object keys, then return false b/c not options obj
    if (!_constants.statePropOptionKeys.some(function (key) {
      return propsB[stateProp][key];
    })) return false;
    // shallow compare the options for equality
    return _constants.statePropOptionKeys.every(function (key) {
      return propsB[stateProp][key] === propsA[stateProp][key];
    });
  };

  // loop through props
  for (var i = 0; i < keysB.length; i++) {
    // skip if prop is forceState
    if (keysB[i] !== 'forceState') {
      // do propsA and propsB both have the property as their own?
      if (!Object.prototype.hasOwnProperty.call(propsA, keysB[i])) return false;
      // if the two props aren't equal, do some additional checks before returning false
      if (propsB[keysB[i]] !== propsA[keysB[i]]) {
        if (keysB[i] === 'as') {
          if (_react2.default.isValidElement(propsA.as) && _react2.default.isValidElement(propsB.as)) {
            // If `as` is JSX/ReactElement, first check to see if `as.type` is the same,
            // e.g. 'div', 'span', ReactClass, ReactFunctionalComponent, and then shallowly
            // compare it's props with a recursive call to sameProps - this should only recurse
            // one time because the JSX/ReactElement shouldn't have the `as` prop.
            if (propsA.as.type !== propsB.as.type) return false;
            if (!compareProps(propsA.as.props, propsB.as.props)) return false;
          } else {
            return false;
          }
          // if the prop is a state, check one level deeper if the props are equal
        } else if (!(_constants.stateProps[keysB[i]] && sameStateProp(keysB[i]))) {
          return false;
        }
      }
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeAndExtractProps;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extract passThroughProps, and
// if `as` is a JSX/ReactElement, then merge props with `as`'s props
function mergeAndExtractProps(props, knownProps) {
  var mergedProps = {};
  var passThroughProps = {};
  Object.keys(props).forEach(function (key) {
    mergedProps[key] = props[key];
    // pass through all props that are not on the knownProps list
    if (!knownProps[key]) passThroughProps[key] = props[key];
  });
  if (_react2.default.isValidElement(props.as)) {
    // if `as` is JSX/ReactElement, then merge in it's props
    Object.keys(props.as.props).forEach(function (key) {
      mergedProps[key] = props.as.props[key];
      if (!knownProps[key]) passThroughProps[key] = props.as.props[key];
    });

    // set `as` to the JSX/ReactElement's `type`:
    // if the ReactElement is a ReactDOMElement then `type` will be a string, e.g. 'div', 'span'
    // if the ReactElement is a ReactComponentElement, then `type` will be
    // either a ReactClass or a ReactFunctionalComponent, e.g. as={<MyComponent />}
    // https://facebook.github.io/react/docs/glossary.html
    mergedProps.as = props.as.type;
  } else {
    mergedProps.as = props.as;
  }

  return { mergedProps: mergedProps, passThroughProps: passThroughProps };
}
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractStyle = extractStyle;
exports.setActiveAndFocusProps = setActiveAndFocusProps;
exports.joinClasses = joinClasses;

var _constants = __webpack_require__(0);

// extract and return the style object and className string for the state given
function extractStyle(props, state) {
  // if no hoverActive prop, then use hover prop for style and classes
  var stateProp = state === 'hoverActive' && !props.hoverActive ? 'hover' : state;
  // loop until the state prop to use is found (i.e. it's not a string)
  var times = 0;
  while (typeof stateProp === 'string' && times < 10) {
    stateProp = props[stateProp];
    times++;
  }
  // if the state prop to use wasn't found, then return a blank style and className object
  if ((typeof stateProp === 'undefined' ? 'undefined' : _typeof(stateProp)) !== 'object') return { style: null, className: '' };

  var extract = {};
  // check if the stateProp is an options object, and extract style and className from the stateProp
  if (_constants.statePropOptionKeys.some(function (key) {
    return stateProp[key];
  })) {
    extract.style = stateProp.style || null;
    extract.className = stateProp.className || '';
  } else {
    // if the stateProp is not an options object, then it's a style object
    extract.style = stateProp;
    extract.className = '';
  }

  return extract;
}

function setActiveAndFocusProps(props) {
  // use the `active` prop for `[type]Active` if no `[type]Active` prop
  if (props.active) {
    if (!props.hoverActive) props.hoverActive = props.active;
    if (!props.touchActive) props.touchActive = props.active;
    if (!props.keyActive) props.keyActive = props.active;
  }

  // use the `focus` prop for `focusFrom[type]` if no `focusFrom[type]` prop
  if (props.focus) {
    if (!props.focusFromTab) props.focusFromTab = props.focus;
    if (!props.focusFromMouse) props.focusFromMouse = props.focus;
    if (!props.focusFromTouch) props.focusFromTouch = props.focus;
  }
}

function joinClasses(className, iStateClass, focusClass) {
  var joined = className;
  joined += joined && iStateClass ? ' ' + iStateClass : '' + iStateClass;
  joined += joined && focusClass ? ' ' + focusClass : '' + focusClass;
  return joined;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recursiveNodeCheck;
// check the node and all of its children
// returns true if the check function returns true for the node
// or any of its children, returns false otherwise
function recursiveNodeCheck(node, check) {
  if (check(node)) return true;
  for (var i = 0; i < node.children.length; i++) {
    if (recursiveNodeCheck(node.children[i], check)) return true;
  }
  return false;
}
module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusRegistry = undefined;
exports.updateMouseFromRI = updateMouseFromRI;

var _notifier = __webpack_require__(6);

var _constants = __webpack_require__(0);

// the shape of what's being tracked globally
// the input object is the default export
var input = {
  mouse: {
    mouseOnDocument: false,
    clientX: 0,
    clientY: 0,
    buttons: 0
  },
  touch: {
    touchOnScreen: false,
    recentTouch: false
  },
  key: {
    recentEnterKeyDown: false
  }
};

// update touch input tracking
var touchTimerID = null;
function updateTouch(e) {
  if (e.type === 'touchstart') {
    input.touch.touchOnScreen = true;
    input.mouse.mouseOnDocument = false;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    input.touch.recentTouch = true;
    if (touchTimerID) window.clearTimeout(touchTimerID);
    touchTimerID = window.setTimeout(function () {
      input.touch.recentTouch = false;
      touchTimerID = null;
    }, _constants.queueTime);
  }

  if (e.touches.length === 0) {
    input.touch.touchOnScreen = false;
  }
}

// update mouse input tracking
function updateMouse(e) {
  input.mouse.clientX = e.clientX;
  input.mouse.clientY = e.clientY;
  input.mouse.buttons = e.buttons;
  if (e.type === 'mouseleave') input.mouse.mouseOnDocument = false;else input.mouse.mouseOnDocument = true;
}

// only update mouse if the mouse event is not from a touch event
function updateHybridMouse(e) {
  if (input.touch.recentTouch || input.touch.touchOnScreen) return;
  updateMouse(e);
}

// update recent enter keydown tracking, used for form submission detection
var enterKeyDownTimerID = null;
function updateEnterKeyDown(e) {
  if (e.key === 'Enter') {
    input.key.recentEnterKeyDown = true;
    if (enterKeyDownTimerID) window.clearTimeout(enterKeyDownTimerID);
    enterKeyDownTimerID = window.setTimeout(function () {
      input.key.recentEnterKeyDown = false;
      enterKeyDownTimerID = null;
    }, _constants.queueTime);
  }
}

// update mouse from RI - this is required for enter and leave events from RI elements
// because when the mouse is moved onto an RI element the most recent mousemove event
// will have the mouse coordinates as off the element, so need to get updated coordinates
// from the react event
function updateMouseFromRI(e) {
  updateMouse(e);
  input.mouse.mouseOnDocument = true;
}

// sign up for notification of touch events if the device supports the touch events api
if (_constants.deviceHasTouch) {
  (0, _notifier.notifyOfAll)(Object.keys(_constants.touchEvents), updateTouch);
}

// sign up for notification of mouse events if the device has a mouse
if (_constants.deviceHasMouse) {
  (0, _notifier.notifyOfAll)(Object.keys(_constants.mouseEvents), _constants.deviceType === 'hybrid' ? updateHybridMouse : updateMouse);
}

// sign up for notification of enter keydown events for form submission detection
(0, _notifier.notifyOfAll)(['keydown'], updateEnterKeyDown);

// focus registry used by RI to track events that cause focus/blur calls (e.g. mousedown)
// so focus/blur is not called twice as event bubbles through nested RIs
var focusRegistry = exports.focusRegistry = {
  focus: null,
  blur: null
};

exports.default = input;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = syntheticClick;

var _notifier = __webpack_require__(6);

var _constants = __webpack_require__(0);

var blockClick = false;
var blockClickTimerID = null;
var blockClickCounter = 0;

// call node.click() on tap, and block a subsequent click fired by the browser if there is one,
// note that blocking the subsequent click event fired by the browser is required because
// when the tap/node.click() call results in a change to the layout of the DOM,
// e.g. hide something, the subsequent click event fired by the browser will land
// on the DOM in it's new layout, and if where the tap occurred now has something different
// that has a click handler, e.g. a link, then the subsequent click event will land on
// and trigger the click handler, which is very bad, so it needs to be blocked.
function syntheticClick(node) {
  // only block one subsequent click event per node.click() call
  blockClickCounter++;
  if (blockClickTimerID !== null) window.clearTimeout(blockClickTimerID);
  blockClick = false;
  node.click();
  blockClick = true;
  // reset click blocking if subsequent click isn't added to browser's queue w/in queueTime
  blockClickTimerID = window.setTimeout(function () {
    blockClick = false;
    blockClickCounter = 0;
    blockClickTimerID = null;
  }, _constants.queueTime);
}

function handleClick(e) {
  if (!blockClick) return;
  e.stopPropagation();
  e.preventDefault();
  blockClickCounter--;
  // reset click blocking if the number of clicks to block is met
  if (blockClickCounter === 0) {
    blockClick = false;
    if (blockClickTimerID !== null) {
      window.clearTimeout(blockClickTimerID);
      blockClickTimerID = null;
    }
  }
}

// only required for touch devices because called on touchend tap to control tapClick
if (_constants.deviceHasTouch) (0, _notifier.notifyOfAll)(['click'], handleClick);
module.exports = exports['default'];

/***/ })
/******/ ]);
});