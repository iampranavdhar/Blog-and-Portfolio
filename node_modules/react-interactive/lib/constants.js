'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childInteractiveProps = exports.defaultTapTimeCutoff = exports.queueTime = exports.knownProps = exports.knownRoleTags = exports.nonBlurrableTags = exports.statePropOptionKeys = exports.stateProps = exports.iStates = exports.otherEvents = exports.touchEvents = exports.mouseEvents = exports.passiveEventSupport = exports.deviceHasMouse = exports.deviceHasTouch = exports.deviceType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enterKeyTrigger = enterKeyTrigger;
exports.spaceKeyTrigger = spaceKeyTrigger;
exports.dummyEvent = dummyEvent;

var _detectIt = require('detect-it');

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