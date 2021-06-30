"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWords = getWords;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var instance = _axios["default"].create({
  baseURL: 'http://localhost:3000/api',
  timeout: 20000
});

function getWords(_x) {
  return _getWords.apply(this, arguments);
}

function _getWords() {
  _getWords = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var queryKey, _queryKey$, number, filter, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryKey = _ref.queryKey;
            _queryKey$ = queryKey[1], number = _queryKey$.number, filter = _queryKey$.filter;
            _context.prev = 2;
            _context.next = 5;
            return instance.get('/convert', {
              params: {
                number: number,
                filter: filter
              }
            });

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _getWords.apply(this, arguments);
}