"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = exports.Name = exports.Job = exports.Wrapp = exports.ImgS = exports.Selfie = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 14px;\n  color: #808080;\n  margin: 25px 0 20px 0;\n  padding: 20px;\n  line-height: 30px;\n  border-radius: 6px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n  background-color: white;\n  margin: 25px 0;\n  position: relative;\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);\n    background-color: white;\n    top: -7px;\n    left: 15px;\n    clip-path: polygon(-6px -6px, 100% 0, 0 100%);\n    transform: rotate(45deg);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 2/2;\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  font-weight: medium;\n  font-size: 22px;\n  color: #808080;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  grid-row: 2/2;\n  grid-column: 2/2;\n  font-weight: 600;\n  font-size: 15px;\n  color: #808080;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 64px auto;\n  column-gap: 20px;\n  grid-template-rows: 32px 32px;\n  margin-bottom: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 1/2;\n  grid-row: -1/1;\n  position: relative;\n  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 50%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: url(", ");\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background-size: cover;\n  position: absolute;\n  border: 2px solid white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Selfie = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var image = _ref.image;
  return image ? image : "";
});

exports.Selfie = Selfie;

var ImgS = _styledComponents["default"].div(_templateObject2());

exports.ImgS = ImgS;

var Wrapp = _styledComponents["default"].div(_templateObject3());

exports.Wrapp = Wrapp;

var Job = _styledComponents["default"].div(_templateObject4());

exports.Job = Job;

var Name = _styledComponents["default"].div(_templateObject5());

exports.Name = Name;

var Description = _styledComponents["default"].div(_templateObject6());

exports.Description = Description;