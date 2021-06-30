"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

import React from "react";
var __jsx = React.createElement;

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    html{\n        font-size: 62.5%;\n        box-sizing: border-box;\n        --red: #e01812;\n        --orange: #ffa220;\n        --black: #393939;\n        --grey: #3A3A3A;\n        --lightblue: #BDC5E4;\n        --darkblue: #1a1c6b;\n        --hoverBlue: #5c6fbc;\n        --purple: #262161;\n        --yellow: #ffc40e;\n        --gold: #FFCB3B;\n        --textGrey: #818181;\n        --textGrey2: #B7B7B7;\n        --lightGrey: #e1e1e1;\n        --offWhite: #ededed;\n        --backgroundGrey: #E8E8E8;\n        --lightGreen: #3BFF89;\n        --green: #3Bbc89;\n        --lightRed: #FF3B3B;\n        --kiwilight: rgba(0, 173, 152, 0.3);\n        --kiwi: rgb(0, 173, 152);\n\n        scroll-behavior: smooth;\n    }\n\n    body {\n        padding: 0;\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n        font-size: 1.5rem;\n      //  background-color: var(--kiwilight);\n        background: linear-gradient(-45deg, var(--green), #23c7ab, var(--kiwilight), #23a6d5);\n        background-size: 400% 400%;\n        animation: gradient 15s ease-in-out infinite;\n\n\n        @keyframes gradient {\n            0%{\n                background-position: 0 50%;\n            }\n            50%{\n                background-position: 100% 50%;\n            }\n            100%{\n                background-position: 0 50%;\n            }\n        }\n    }\n    a {\n        color: inherit;\n        text-decoration: none;\n        :hover{\n            text-decoration: underline;\n        }\n    }\n\n    *, *:before, *:after {\n         box-sizing: inherit;\n    }\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject());

var InnerStyles = _styledComponents["default"].div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-14vv5uc-0"
})(["margin:0 auto;min-height:100vh;max-width:1200px;"]);

function Page(_ref) {
  var children = _ref.children;
  return __jsx("div", null, __jsx(GlobalStyles, null), __jsx(InnerStyles, null, children));
}