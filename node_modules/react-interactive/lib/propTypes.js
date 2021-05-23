'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

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