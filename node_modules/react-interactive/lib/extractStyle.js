'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractStyle = extractStyle;
exports.setActiveAndFocusProps = setActiveAndFocusProps;
exports.joinClasses = joinClasses;

var _constants = require('./constants');

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