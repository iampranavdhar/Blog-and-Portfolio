'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSupported;

var _CookieStorage = require('./CookieStorage');

var TEST_KEY = '__test';

function hasStorage(name) {
  try {
    var storage = window[name];
    storage.setItem(TEST_KEY, '1');
    storage.removeItem(TEST_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

function isSupported() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localStorage';

  var storage = String(name).replace(/storage$/i, '').toLowerCase();

  if (storage === 'local') {
    return hasStorage('localStorage');
  }

  if (storage === 'session') {
    return hasStorage('sessionStorage');
  }

  if (storage === 'cookie') {
    return (0, _CookieStorage.hasCookies)();
  }

  if (storage === 'memory') {
    return true;
  }

  throw new Error('Storage method `' + name + '` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.');
}