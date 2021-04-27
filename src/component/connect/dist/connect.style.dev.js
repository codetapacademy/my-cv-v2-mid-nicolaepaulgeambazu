"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagine = exports.StyledIcon = exports.StyledImage = exports.WelcomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _image = _interopRequireDefault(require("../../imagine/image.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nmargin: 0;\nheight:20px;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  display:grid;\n  grid-gap:10px;\n  grid-template-columns: repeat(4, 1fr);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\npadding-top:100%;\nwidth:100%;\nbox-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\nborder-radius: 6px;\ntransform: rotate(-2.5deg);\nmargin-top: 5px;\nbackground-image: url(", ");\nposition: relative;\nbackground-size:cover;\nbackground-repeat:no-repeat;\nwidth:337px;\nheight:-25px;\nmargin:0 auto;\nmargin-bottom:20px;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 1/-1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WelcomeWrapper = _styledComponents["default"].div(_templateObject());

exports.WelcomeWrapper = WelcomeWrapper;

var StyledImage = _styledComponents["default"].div(_templateObject2(), _image["default"]);

exports.StyledImage = StyledImage;

var StyledIcon = _styledComponents["default"].i(_templateObject3(), function (_ref) {
  var icon = _ref.icon;
  return icon === "codewars" ? "48" : "30";
});

exports.StyledIcon = StyledIcon;

var imagine = _styledComponents["default"].i(_templateObject4());

exports.imagine = imagine;