"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomeWrapper = exports.DescriptionBox = exports.Common = exports.Job = exports.Nume = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 1/-1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  padding: 20px;\n  color: #707070;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 30px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  font-weight: 500;\n  color: #808080;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  left:10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  font-weight: 500;\n  color: #808080;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  left:10px;\n  text-align:center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  font-weight: 500;\n  color: #808080;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  left:10px;\n  text-align:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nume = _styledComponents["default"].div(_templateObject());

exports.Nume = Nume;

var Job = _styledComponents["default"].div(_templateObject2());

exports.Job = Job;

var Common = _styledComponents["default"].div(_templateObject3());

exports.Common = Common;

var DescriptionBox = _styledComponents["default"].div(_templateObject4());

exports.DescriptionBox = DescriptionBox;

var WelcomeWrapper = _styledComponents["default"].div(_templateObject5());

exports.WelcomeWrapper = WelcomeWrapper;