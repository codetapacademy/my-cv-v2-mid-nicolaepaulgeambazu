"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Table = exports.WrapperProjects = exports.WelcomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\npadding:10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\ndisplay:flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\nborder-radius:6px;\n"]);

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

var WrapperProjects = _styledComponents["default"].div(_templateObject2());

exports.WrapperProjects = WrapperProjects;

var Table = _styledComponents["default"].div(_templateObject3());

exports.Table = Table;

var Icon = _styledComponents["default"].div(_templateObject4());

exports.Icon = Icon;