"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MemoryStorage = function () {
  function MemoryStorage() {
    _classCallCheck(this, MemoryStorage);

    this._data = {};
  }

  _createClass(MemoryStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return this._data.hasOwnProperty(key) ? this._data[key] : null;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this._data[key] = String(value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return delete this._data[key];
    }
  }, {
    key: "clear",
    value: function clear() {
      return this._data = {};
    }
  }]);

  return MemoryStorage;
}();

exports.default = MemoryStorage;