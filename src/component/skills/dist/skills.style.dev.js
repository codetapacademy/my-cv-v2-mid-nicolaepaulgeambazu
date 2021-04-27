"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = exports.ListItem = exports.ListWrapper = exports.Skills = exports.WelcomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display:grid;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nfont-size:18px;\n  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\nborder: 1px solid #333;\nborder-radius:6px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding:10px 20px;\n  background-color:white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  width: 100%;\n"]);

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

var Skills = _styledComponents["default"].div(_templateObject2());

exports.Skills = Skills;

var ListWrapper = _styledComponents["default"].div(_templateObject3());

exports.ListWrapper = ListWrapper;

var ListItem = _styledComponents["default"].div(_templateObject4());

exports.ListItem = ListItem;

var ListItemIcon = _styledComponents["default"].div(_templateObject5());

exports.ListItemIcon = ListItemIcon;