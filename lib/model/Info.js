"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = void 0;
var _ApiClient = require("../ApiClient");
var _Contact = require("./Contact");
var _License = require("./License");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Info model module.
 * @module model/Info
 * @version 1.0.0
 */
var Info = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Info</code>.
   * @alias module:model/Info
   * @class
   * @param title {String} 
   * @param version {String} 
   */
  function Info(title, version) {
    _classCallCheck(this, Info);
    this.title = title;
    this.version = version;
  }

  /**
   * Constructs a <code>Info</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Info} obj Optional instance to populate.
   * @return {module:model/Info} The populated <code>Info</code> instance.
   */
  _createClass(Info, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Info();
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('termsOfService')) obj.termsOfService = _ApiClient.ApiClient.convertToType(data['termsOfService'], 'String');
        if (data.hasOwnProperty('contact')) obj.contact = _Contact.Contact.constructFromObject(data['contact']);
        if (data.hasOwnProperty('license')) obj.license = _License.License.constructFromObject(data['license']);
        if (data.hasOwnProperty('version')) obj.version = _ApiClient.ApiClient.convertToType(data['version'], 'String');
      }
      return obj;
    }
  }]);
  return Info;
}();
/**
 * @member {String} title
 */
exports.Info = Info;
Info.prototype.title = undefined;

/**
 * @member {String} description
 */
Info.prototype.description = undefined;

/**
 * @member {String} termsOfService
 */
Info.prototype.termsOfService = undefined;

/**
 * @member {module:model/Contact} contact
 */
Info.prototype.contact = undefined;

/**
 * @member {module:model/License} license
 */
Info.prototype.license = undefined;

/**
 * @member {String} version
 */
Info.prototype.version = undefined;