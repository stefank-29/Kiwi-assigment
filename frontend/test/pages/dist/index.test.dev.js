"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ConvertService = require("../../services/ConvertService");

var _axios = _interopRequireDefault(require("axios"));

// import { render, screen } from '../test-utils';
// import Home from '../../pages/index';
describe('Fetching words', function () {
  it('should return words',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ConvertService.getWords)({
              queryKey: ['getWords', {
                number: '23',
                filter: false
              }]
            });

          case 2:
            data = _context.sent;
            console.log(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});