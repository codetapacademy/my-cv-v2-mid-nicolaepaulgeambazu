"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Styled = exports.Titlu = exports.Box = exports.SkillN = exports.SkillColor = exports.ButtonExpand = exports.Buttons = exports.ProjectStats = exports.ButtonBlue = exports.Table = exports.Wrappers = exports.WrapperProjects = exports.WelcomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\npadding:10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: repeat(2, 1fr);\npadding: 10px;\nborder: 2px solid grey;\nborder-bottom: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\nmargin : 10px;\nfont-size:20px;\ncolor:#333;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\nmargin-bottom:10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\ncolor:#333;\nfont-size:17px;\ndisplay:inline-flex;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nbackground-color:", ";\nborder-radius:50%;\nwidth:10px;\nheight:10px;\n&:before{\n  content:\"\";\n  margin:10px;\n  width:10px;\n}\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: #ff006d;\n  height: 40px;\n  width: 40px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 10px;\n  padding-right: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid grey;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n  line-height: 2;\n  border-bottom: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  border-radius: 20px;\n  font-size: 10px;\n  background-color: #1875f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  border: 0;\n  font-weight: 900;\n  padding: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\nmargin-bottom:10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\nborder-radius:6px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nborder:1px solid black;\nborder-radius:6px;\nheight:", ";\noverflow:auto;\n"]);

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

var WrapperProjects = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'auto' : '0px';
});

exports.WrapperProjects = WrapperProjects;

var Wrappers = _styledComponents["default"].div(_templateObject3());

exports.Wrappers = Wrappers;

var Table = _styledComponents["default"].div(_templateObject4());

exports.Table = Table;

var ButtonBlue = _styledComponents["default"].div(_templateObject5());

exports.ButtonBlue = ButtonBlue;

var ProjectStats = _styledComponents["default"].div(_templateObject6());

exports.ProjectStats = ProjectStats;

var Buttons = _styledComponents["default"].div(_templateObject7());

exports.Buttons = Buttons;

var ButtonExpand = _styledComponents["default"].a(_templateObject8());

exports.ButtonExpand = ButtonExpand;

var SkillColor = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.color;
});

exports.SkillColor = SkillColor;

var SkillN = _styledComponents["default"].div(_templateObject10());

exports.SkillN = SkillN;

var Box = _styledComponents["default"].div(_templateObject11());

exports.Box = Box;

var Titlu = _styledComponents["default"].div(_templateObject12());

exports.Titlu = Titlu;

var Styled = _styledComponents["default"].div(_templateObject13());

exports.Styled = Styled;

var Icon = _styledComponents["default"].div(_templateObject14());

exports.Icon = Icon;