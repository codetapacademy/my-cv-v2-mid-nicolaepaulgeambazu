"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTitle = exports.StyledHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  line-height: 60px;\n  text-align: center;\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 30px;\n  margin-top: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  background-color: #D52027;\n  padding: 0 36px;\n  margin-bottom: 70px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents["default"].div(_templateObject());

exports.StyledHeader = StyledHeader;

var StyledTitle = _styledComponents["default"].div(_templateObject2());

exports.StyledTitle = StyledTitle;