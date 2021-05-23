'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoryStorage = exports.CookieStorage = exports.isSupported = exports.storage = undefined;

var _isSupported = require('./isSupported');

var _isSupported2 = _interopRequireDefault(_isSupported);

var _CookieStorage = require('./CookieStorage');

var _CookieStorage2 = _interopRequireDefault(_CookieStorage);

var _MemoryStorage = require('./MemoryStorage');

var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = null;

if ((0, _isSupported2.default)('localStorage')) {
  // use localStorage
  exports.storage = storage = window.localStorage;
} else if ((0, _isSupported2.default)('sessionStorage')) {
  // use sessionStorage
  exports.storage = storage = window.sessionStorage;
} else if ((0, _isSupported2.default)('cookieStorage')) {
  // use cookies
  exports.storage = storage = new _CookieStorage2.default();
} else {
  // use memory
  exports.storage = storage = new _MemoryStorage2.default();
}

exports.default = storage;
exports.storage = storage;
exports.isSupported = _isSupported2.default;
exports.CookieStorage = _CookieStorage2.default;
exports.MemoryStorage = _MemoryStorage2.default;