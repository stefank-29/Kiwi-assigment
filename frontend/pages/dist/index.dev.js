"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _head = _interopRequireDefault(require("next/head"));

var _image = _interopRequireDefault(require("next/image"));

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ConvertService = require("../services/ConvertService");

var _reactQuery = require("react-query");

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _ClipLoader = _interopRequireDefault(require("react-spinners/ClipLoader"));

import React from "react";
var __jsx = React.createElement;

var HomeStyles = _styledComponents["default"].div.withConfig({
  displayName: "pages__HomeStyles",
  componentId: "lgoza8-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;height:100vh;"]);

var HeaderStyles = _styledComponents["default"].div.withConfig({
  displayName: "pages__HeaderStyles",
  componentId: "lgoza8-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:30%;width:100%;.title{color:var(--black);font-size:4.5rem;font-family:'Nunito',sans-serif;font-weight:700;text-align:center;margin-bottom:2rem;}form{display:flex;flex-direction:column;align-items:center;justify-content:center;input{width:17rem;padding:1rem;margin-right:2rem;border-radius:3px;border:1px solid #0080ff;outline:none;font-size:1.5rem;font-family:'Roboto',sans-serif;color:var(--black);font-weight:700;transition:all 0.3s ease-in-out;:focus{border:transparent;box-shadow:inset 0 0 0px 2px #0073e6;}}.upper-form{display:flex;align-items:center;}input[type='checkbox']{width:auto;margin-right:1.2rem;}.filter{display:flex;align-items:center;margin-top:3.5rem;align-self:flex-start;font-size:1.8rem;color:var(--black);}.input-div{position:relative;.error{position:absolute;left:0;top:4.5rem;color:#990000;}}.convert-btn{padding:1rem 1.5rem;background-color:var(--kiwi);color:white;border-radius:5px;border:none;font-size:1.5rem;font-weight:bold;font-family:'Roboto',sans-serif;cursor:pointer;transition:all 0.3s ease-in-out;:hover{background-color:#008071;}}}"]);

var WordsStyles = _styledComponents["default"].div.withConfig({
  displayName: "pages__WordsStyles",
  componentId: "lgoza8-2"
})(["width:100%;height:50rem;padding:3rem;background-color:whitesmoke;box-shadow:0 0 4px 1px var(--kiwi);overflow:auto;margin-top:5rem;.scroll{position:relative;width:100%;height:100%;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:3.8rem;}.word{display:flex;align-items:center;justify-content:center;text-align:center;padding:1rem;font-family:'Roboto',sans-serif;font-size:1.8rem;}.loader{position:absolute;top:50%;left:50%;transform:translate(-50%,50%);}.no-results{font-size:2.5rem;font-family:'Roboto',sans-serif;}@media all and (max-width:900px){.scroll{grid-template-columns:repeat(4,1fr);}}@media all and (max-width:650px){.scroll{grid-template-columns:repeat(3,1fr);}}@media all and (max-width:450px){height:45rem;.scroll{grid-template-columns:repeat(2,1fr);}}@media all and (min-width:500px){::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{background-color:#e3e3e3;}::-webkit-scrollbar-thumb{border-radius:10px;background-image:linear-gradient( to bottom,var(--kiwilight),#23a6d5 );}}"]);

function Home() {
  var _useState = (0, _react.useState)(''),
      number = _useState[0],
      setNumber = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      inputError = _useState3[0],
      setInputError = _useState3[1];

  var _useState4 = (0, _react.useState)(null),
      words = _useState4[0],
      setWords = _useState4[1];

  var _useState5 = (0, _react.useState)(100),
      limit = _useState5[0],
      setLimit = _useState5[1];

  var _useQuery = (0, _reactQuery.useQuery)(['getWords', {
    number: number,
    filter: filter
  }], _ConvertService.getWords, {
    refetchOnWindowFocus: false,
    enabled: false
  }),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(e) {
      var _ref, data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(number == '')) {
                _context.next = 4;
                break;
              }

              setInputError(true);
              return _context.abrupt("return");

            case 4:
              setInputError(false);
              _context.next = 7;
              return refetch();

            case 7:
              _ref = _context.sent;
              data = _ref.data;
              setWords(data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  function handleCheckbox(e) {
    if (e.target.checked === true) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  }

  function fetchData() {
    setLimit(limit + 100);
  }

  return __jsx(HomeStyles, null, __jsx(HeaderStyles, null, __jsx("h1", {
    className: "title"
  }, "Number to Words"), __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "upper-form"
  }, __jsx("div", {
    className: "input-div"
  }, __jsx("input", {
    onChange: function onChange(e) {
      return setNumber(e.target.value);
    },
    placeholder: "Enter number",
    type: "text",
    maxLength: "14",
    onInput: function onInput(e) {
      return e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
  }), inputError && __jsx("span", {
    className: "error"
  }, "Please enter the number")), __jsx("button", {
    className: "convert-btn",
    type: "submit"
  }, "Convert")), __jsx("div", {
    className: "filter"
  }, __jsx("input", {
    type: "checkbox",
    id: "check",
    onChange: handleCheckbox
  }), __jsx("label", {
    htmlFor: "check"
  }, "Include only real words")))), __jsx(WordsStyles, {
    id: "scrollable"
  }, isLoading ? __jsx("div", {
    className: "loader"
  }, __jsx(_ClipLoader["default"], {
    color: "rgb(0, 173, 152)",
    loading: isLoading,
    size: 100
  })) : words ? (words === null || words === void 0 ? void 0 : words.length) !== 0 ? __jsx(_reactInfiniteScrollComponent["default"], {
    className: "scroll",
    dataLength: limit,
    next: fetchData,
    hasMore: true,
    scrollableTarget: "scrollable"
  }, words === null || words === void 0 ? void 0 : words.slice(0, limit).map(function (word, index) {
    return __jsx("span", {
      key: index,
      className: "word"
    }, word);
  })) : __jsx("div", {
    className: "loader"
  }, __jsx("p", {
    className: "no-results"
  }, "There are no words for inserted number...")) : __jsx("div", {
    className: "loader"
  }, __jsx("p", {
    className: "no-results"
  }, "The words will appear here when you convert."))));
}