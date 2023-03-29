"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasurementcreateProperties = void 0;
var _ApiClient = require("../ApiClient");
var _MeasurementcreatePropertiesPhenomenons = require("./MeasurementcreatePropertiesPhenomenons");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MeasurementcreateProperties model module.
 * @module model/MeasurementcreateProperties
 * @version 1.0.0
 */
var MeasurementcreateProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementcreateProperties</code>.
   * @alias module:model/MeasurementcreateProperties
   * @class
   * @param time {Date} 
   */
  function MeasurementcreateProperties(time) {
    _classCallCheck(this, MeasurementcreateProperties);
    this.time = time;
  }

  /**
   * Constructs a <code>MeasurementcreateProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementcreateProperties} obj Optional instance to populate.
   * @return {module:model/MeasurementcreateProperties} The populated <code>MeasurementcreateProperties</code> instance.
   */
  _createClass(MeasurementcreateProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementcreateProperties();
        if (data.hasOwnProperty('sensor')) obj.sensor = _ApiClient.ApiClient.convertToType(data['sensor'], 'String');
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('phenomenons')) obj.phenomenons = _ApiClient.ApiClient.convertToType(data['phenomenons'], {
          'String': _MeasurementcreatePropertiesPhenomenons.MeasurementcreatePropertiesPhenomenons
        });
      }
      return obj;
    }
  }]);
  return MeasurementcreateProperties;
}();
/**
 * the id of an existing sensor
 * @member {String} sensor
 */
exports.MeasurementcreateProperties = MeasurementcreateProperties;
MeasurementcreateProperties.prototype.sensor = undefined;

/**
 * @member {Date} time
 */
MeasurementcreateProperties.prototype.time = undefined;

/**
 * @member {Object.<String, module:model/MeasurementcreatePropertiesPhenomenons>} phenomenons
 */
MeasurementcreateProperties.prototype.phenomenons = undefined;