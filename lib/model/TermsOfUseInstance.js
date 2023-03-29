"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsOfUseInstance = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TermsOfUseInstance model module.
 * @module model/TermsOfUseInstance
 * @version 1.0.0
 */
var TermsOfUseInstance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TermsOfUseInstance</code>.
   * @alias module:model/TermsOfUseInstance
   * @class
   * @param id {String} 
   * @param issuedDate {Date} 
   * @param contents {String} 
   */
  function TermsOfUseInstance(id, issuedDate, contents) {
    _classCallCheck(this, TermsOfUseInstance);
    this.id = id;
    this.issuedDate = issuedDate;
    this.contents = contents;
  }

  /**
   * Constructs a <code>TermsOfUseInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TermsOfUseInstance} obj Optional instance to populate.
   * @return {module:model/TermsOfUseInstance} The populated <code>TermsOfUseInstance</code> instance.
   */
  _createClass(TermsOfUseInstance, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TermsOfUseInstance();
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('issuedDate')) obj.issuedDate = _ApiClient.ApiClient.convertToType(data['issuedDate'], 'Date');
        if (data.hasOwnProperty('contents')) obj.contents = _ApiClient.ApiClient.convertToType(data['contents'], 'String');
      }
      return obj;
    }
  }]);
  return TermsOfUseInstance;
}();
/**
 * @member {Date} created
 */
exports.TermsOfUseInstance = TermsOfUseInstance;
TermsOfUseInstance.prototype.created = undefined;

/**
 * @member {Date} modified
 */
TermsOfUseInstance.prototype.modified = undefined;

/**
 * @member {String} id
 */
TermsOfUseInstance.prototype.id = undefined;

/**
 * @member {Date} issuedDate
 */
TermsOfUseInstance.prototype.issuedDate = undefined;

/**
 * @member {String} contents
 */
TermsOfUseInstance.prototype.contents = undefined;