"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledArticleTitle = exports.StyledSubTitle = exports.StyledTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 35px;\n  color:red\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTitle = _styledComponents["default"].h1(_templateObject());

exports.StyledTitle = StyledTitle;

var StyledSubTitle = _styledComponents["default"].h2(_templateObject2());

exports.StyledSubTitle = StyledSubTitle;

var StyledArticleTitle = _styledComponents["default"].h3(_templateObject3());

exports.StyledArticleTitle = StyledArticleTitle;