"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCelula = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  grid-column: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCelula = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var height = _ref.height;
  return height ? "height: ".concat(height, "px;") : "";
}, function (_ref2) {
  var jc = _ref2.jc;
  return jc ? "display: flex; justify-content: ".concat(jc, ";") : "";
}, function (_ref3) {
  var span = _ref3.span;
  return span ? "span 1" : "1/-1";
});

exports.StyledCelula = StyledCelula;