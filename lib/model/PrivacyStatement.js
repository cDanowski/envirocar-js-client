"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyStatement = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrivacyStatement model module.
 * @module model/PrivacyStatement
 * @version 1.0.0
 */
var PrivacyStatement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrivacyStatement</code>.
   * @alias module:model/PrivacyStatement
   * @class
   * @param id {String} 
   * @param issuedDate {Date} 
   * @param contents {String} 
   */
  function PrivacyStatement(id, issuedDate, contents) {
    _classCallCheck(this, PrivacyStatement);
    this.id = id;
    this.issuedDate = issuedDate;
    this.contents = contents;
  }

  /**
   * Constructs a <code>PrivacyStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrivacyStatement} obj Optional instance to populate.
   * @return {module:model/PrivacyStatement} The populated <code>PrivacyStatement</code> instance.
   */
  _createClass(PrivacyStatement, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrivacyStatement();
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('issuedDate')) obj.issuedDate = _ApiClient.ApiClient.convertToType(data['issuedDate'], 'Date');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], 'String');
      }
      return obj;
    }
  }]);
  return PrivacyStatement;
}();
/**
 * @member {Date} created
 */
exports.PrivacyStatement = PrivacyStatement;
PrivacyStatement.prototype.created = undefined;

/**
 * @member {Date} modified
 */
PrivacyStatement.prototype.modified = undefined;

/**
 * @member {String} id
 */
PrivacyStatement.prototype.id = undefined;

/**
 * @member {Date} issuedDate
 */
PrivacyStatement.prototype.issuedDate = undefined;

/**
 * @member {String} contents
 */
PrivacyStatement.prototype.contents = undefined;