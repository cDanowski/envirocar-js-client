"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exception1 = void 0;
var _ApiClient = require("../ApiClient");
var _MaybeCircularException = require("./MaybeCircularException");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Exception1 model module.
 * @module model/Exception1
 * @version 1.0.0
 */
var Exception1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Exception1</code>.
   * @alias module:model/Exception1
   * @class
   * @param type {String} 
   */
  function Exception1(type) {
    _classCallCheck(this, Exception1);
    this.type = type;
  }

  /**
   * Constructs a <code>Exception1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Exception1} obj Optional instance to populate.
   * @return {module:model/Exception1} The populated <code>Exception1</code> instance.
   */
  _createClass(Exception1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Exception1();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
        if (data.hasOwnProperty('at')) obj.at = _ApiClient.ApiClient.convertToType(data['at'], ['String']);
        if (data.hasOwnProperty('suppressed')) obj.suppressed = _ApiClient.ApiClient.convertToType(data['suppressed'], [_MaybeCircularException.MaybeCircularException]);
        if (data.hasOwnProperty('causedBy')) obj.causedBy = _MaybeCircularException.MaybeCircularException.constructFromObject(data['causedBy']);
      }
      return obj;
    }
  }]);
  return Exception1;
}();
/**
 * @member {String} type
 */
exports.Exception1 = Exception1;
Exception1.prototype.type = undefined;

/**
 * @member {String} message
 */
Exception1.prototype.message = undefined;

/**
 * @member {Array.<String>} at
 */
Exception1.prototype.at = undefined;

/**
 * @member {Array.<module:model/MaybeCircularException>} suppressed
 */
Exception1.prototype.suppressed = undefined;

/**
 * @member {module:model/MaybeCircularException} causedBy
 */
Exception1.prototype.causedBy = undefined;

// Implement MaybeCircularException interface: