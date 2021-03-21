"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPillLink = exports.StyledButton = exports.StyleDisc = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  background-color: #1875f0;\n  border-radius: 20px;\n  color: white;\n  padding: 12px 24px;\n  font-size: 10px;\n  font-weight: 900;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  justify-content: center;\n  margin-top: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* background-color: #1875f0; */\n  background-color: ", ";\n  margin-top: 30px;\n  border-radius: 20px;\n  color: white;\n  padding: 12px 24px;\n  font-size: 10px;\n  font-weight: 900;\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & .icon__download {\n    margin-right: 12px;\n    font-size: 15px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 50%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: ", ";\nheight: ", ";\nborder: 0;\nbackground-color: ", ";\n/*\nbackground-color: ", ";\n  */\ncolor: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleDisc = styled.div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size ? size : "40px";
}, function (_ref2) {
  var size = _ref2.size;
  return size ? size : "40px";
}, function (_ref3) {
  var color = _ref3.color;
  return color ? color : "#50d166";
}, function (_ref4) {
  var color = _ref4.color;
  return color || "#50d166";
});
exports.StyleDisc = StyleDisc;
var StyledButton = styled.button(_templateObject2(), function (_ref5) {
  var color = _ref5.color;
  return color ? color : "#1875f0";
});
exports.StyledButton = StyledButton;
var StyledPillLink = styled.a(_templateObject3());
exports.StyledPillLink = StyledPillLink;