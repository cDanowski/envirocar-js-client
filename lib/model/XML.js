"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XML = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The XML model module.
 * @module model/XML
 * @version 1.0.0
 */
var XML = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>XML</code>.
   * @alias module:model/XML
   * @class
   */
  function XML() {
    _classCallCheck(this, XML);
  }

  /**
   * Constructs a <code>XML</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XML} obj Optional instance to populate.
   * @return {module:model/XML} The populated <code>XML</code> instance.
   */
  _createClass(XML, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new XML();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('namespace')) obj.namespace = _ApiClient.ApiClient.convertToType(data['namespace'], 'String');
        if (data.hasOwnProperty('prefix')) obj.prefix = _ApiClient.ApiClient.convertToType(data['prefix'], 'String');
        if (data.hasOwnProperty('attribute')) obj.attribute = _ApiClient.ApiClient.convertToType(data['attribute'], 'Boolean');
        if (data.hasOwnProperty('wrapped')) obj.wrapped = _ApiClient.ApiClient.convertToType(data['wrapped'], 'Boolean');
      }
      return obj;
    }
  }]);
  return XML;
}();
/**
 * @member {String} name
 */
exports.XML = XML;
XML.prototype.name = undefined;

/**
 * @member {String} namespace
 */
XML.prototype.namespace = undefined;

/**
 * @member {String} prefix
 */
XML.prototype.prefix = undefined;

/**
 * @member {Boolean} attribute
 * @default false
 */
XML.prototype.attribute = false;

/**
 * @member {Boolean} wrapped
 * @default false
 */
XML.prototype.wrapped = false;