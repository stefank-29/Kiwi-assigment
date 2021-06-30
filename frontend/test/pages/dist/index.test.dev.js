"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ConvertService = require("../../services/ConvertService");

describe('Fetching words', function () {
  it('should return all permutations of words',
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
            expect(data).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should return only real english words',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _ConvertService.getWords)({
              queryKey: ['getWords', {
                number: '2337',
                filter: true
              }]
            });

          case 2:
            data = _context2.sent;
            expect(data).toEqual(['adds', 'beds', 'beep', 'beer', 'bees']);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should return empty array',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _ConvertService.getWords)({
              queryKey: ['getWords', {
                number: '34244',
                filter: true
              }]
            });

          case 2:
            data = _context3.sent;
            expect(data).toEqual([]);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});