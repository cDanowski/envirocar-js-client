"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exception = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("./Exception1");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Exception model module.
 * @module model/Exception
 * @version 1.0.0
 */
var Exception = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Exception</code>.
   * @alias module:model/Exception
   * @class
   * @param statusCode {Number} 
   * @param reasonPhrase {String} 
   */
  function Exception(statusCode, reasonPhrase) {
    _classCallCheck(this, Exception);
    this.statusCode = statusCode;
    this.reasonPhrase = reasonPhrase;
  }

  /**
   * Constructs a <code>Exception</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Exception} obj Optional instance to populate.
   * @return {module:model/Exception} The populated <code>Exception</code> instance.
   */
  _createClass(Exception, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Exception();
        if (data.hasOwnProperty('statusCode')) obj.statusCode = _ApiClient.ApiClient.convertToType(data['statusCode'], 'Number');
        if (data.hasOwnProperty('reasonPhrase')) obj.reasonPhrase = _ApiClient.ApiClient.convertToType(data['reasonPhrase'], 'String');
        if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
        if (data.hasOwnProperty('details')) obj.details = _ApiClient.ApiClient.convertToType(data['details'], Object);
        if (data.hasOwnProperty('stackTrace')) obj.stackTrace = _Exception.Exception1.constructFromObject(data['stackTrace']);
      }
      return obj;
    }
  }]);
  return Exception;
}();
/**
 * @member {Number} statusCode
 */
exports.Exception = Exception;
Exception.prototype.statusCode = undefined;

/**
 * @member {String} reasonPhrase
 */
Exception.prototype.reasonPhrase = undefined;

/**
 * @member {String} message
 */
Exception.prototype.message = undefined;

/**
 * @member {Object} details
 */
Exception.prototype.details = undefined;

/**
 * @member {module:model/Exception1} stackTrace
 */
Exception.prototype.stackTrace = undefined;