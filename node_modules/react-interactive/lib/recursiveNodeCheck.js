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