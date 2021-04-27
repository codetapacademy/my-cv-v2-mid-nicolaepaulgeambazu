"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapCv = exports.chevron = exports.buttonel = exports.expListImage = exports.icon = exports.exptitle = exports.expList = exports.expListWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  margin: auto;\n  cursor: pointer;\n  border:1px solid black ;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border-radius: 50%;\n  border: 1px solid black;\n  width: 55px;\n  height: 50px;\n  margin: 40px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: grid;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 15px;\n  border-radius: 50%;\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n  background: url(", ");\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: grid;\n  width: 100px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: grid;\n  width: 50px;\n  margin: 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 6px;\n  display: flex;\n  grid-template: 1fr auto 1fr;\n  border: 1px solid black;\n  margin-left: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var expListWrapper = _styledComponents["default"].div(_templateObject());

exports.expListWrapper = expListWrapper;

var expList = _styledComponents["default"].div(_templateObject2());

exports.expList = expList;

var exptitle = _styledComponents["default"].div(_templateObject3());

exports.exptitle = exptitle;

var icon = _styledComponents["default"].div(_templateObject4(), function (_ref) {
  var logo = _ref.logo;
  return logo ? logo : "";
});

exports.icon = icon;

var expListImage = _styledComponents["default"].div(_templateObject5());

exports.expListImage = expListImage;

var buttonel = _styledComponents["default"].div(_templateObject6());

exports.buttonel = buttonel;

var chevron = _styledComponents["default"].div(_templateObject7());

exports.chevron = chevron;

var wrapCv = _styledComponents["default"].div(_templateObject8());

exports.wrapCv = wrapCv;