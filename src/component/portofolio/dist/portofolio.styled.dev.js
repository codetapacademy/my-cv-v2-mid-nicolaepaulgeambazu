"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subt = exports.Icons = exports.Title = exports.Little = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size:15px;\n  color:grey;\n  margin-bottom:5px;\n  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 15px;\n  border-radius: 50%;\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n  background: url(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size:20px;\n  margin-bottom:5px;\n  margin-top:5px;\n  color:grey;\n  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size:25px;\n  color:grey;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Little = _styledComponents["default"].div(_templateObject());

exports.Little = Little;

var Title = _styledComponents["default"].div(_templateObject2());

exports.Title = Title;

var Icons = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var logo = _ref.logo;
  return logo ? logo : "";
});

exports.Icons = Icons;

var Subt = _styledComponents["default"].div(_templateObject4());

exports.Subt = Subt;