'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hasCookies = hasCookies;

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var prefix = 'lS_';

var CookieStorage = function () {
  function CookieStorage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CookieStorage);

    this.cookieOptions = Object.assign({ path: '/' }, options);
    prefix = options.prefix === undefined ? prefix : options.prefix;
  }

  _createClass(CookieStorage, [{
    key: 'getItem',
    value: function getItem(key) {
      var cookies = _cookie2.default.parse(document.cookie);
      if (!cookies || !cookies.hasOwnProperty(prefix + key)) {
        return null;
      }
      return cookies[prefix + key];
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      document.cookie = _cookie2.default.serialize(prefix + key, value, this.cookieOptions);
      return value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      var options = Object.assign({}, this.cookieOptions, { maxAge: -1 });
      document.cookie = _cookie2.default.serialize(prefix + key, '', options);
      return null;
    }
  }, {
    key: 'clear',
    value: function clear() {
      var cookies = _cookie2.default.parse(document.cookie);
      for (var key in cookies) {
        if (key.indexOf(prefix) === 0) {
          this.removeItem(key.substr(prefix.length));
        }
      }

      return null;
    }
  }]);

  return CookieStorage;
}();

exports.default = CookieStorage;
function hasCookies() {
  var storage = new CookieStorage();

  try {
    var TEST_KEY = '__test';
    storage.setItem(TEST_KEY, '1');
    var value = storage.getItem(TEST_KEY);
    storage.removeItem(TEST_KEY);

    return value === '1';
  } catch (e) {
    return false;
  }
}