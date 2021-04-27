"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSubtitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  font-weight: 500;\n  color: #808080;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSubtitle = _styledComponents["default"].div(_templateObject());

exports.StyledSubtitle = StyledSubtitle;