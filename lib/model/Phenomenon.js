"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phenomenon = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Phenomenon model module.
 * @module model/Phenomenon
 * @version 1.0.0
 */
var Phenomenon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Phenomenon</code>.
   * @alias module:model/Phenomenon
   * @class
   * @param name {String} 
   * @param unit {String} 
   */
  function Phenomenon(name, unit) {
    _classCallCheck(this, Phenomenon);
    this.name = name;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Phenomenon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Phenomenon} obj Optional instance to populate.
   * @return {module:model/Phenomenon} The populated <code>Phenomenon</code> instance.
   */
  _createClass(Phenomenon, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Phenomenon();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
      }
      return obj;
    }
  }]);
  return Phenomenon;
}();
/**
 * @member {String} name
 */
exports.Phenomenon = Phenomenon;
Phenomenon.prototype.name = undefined;

/**
 * @member {String} unit
 */
Phenomenon.prototype.unit = undefined;

/**
 * @member {Date} created
 */
Phenomenon.prototype.created = undefined;

/**
 * @member {Date} modified
 */
Phenomenon.prototype.modified = undefined;