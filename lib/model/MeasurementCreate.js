"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasurementCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Geometry = require("./Geometry");
var _MeasurementcreateProperties = require("./MeasurementcreateProperties");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MeasurementCreate model module.
 * @module model/MeasurementCreate
 * @version 1.0.0
 */
var MeasurementCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementCreate</code>.
   * @alias module:model/MeasurementCreate
   * @class
   * @param type {module:model/MeasurementCreate.TypeEnum} 
   * @param geometry {module:model/Geometry} 
   * @param properties {module:model/MeasurementcreateProperties} 
   */
  function MeasurementCreate(type, geometry, properties) {
    _classCallCheck(this, MeasurementCreate);
    this.type = type;
    this.geometry = geometry;
    this.properties = properties;
  }

  /**
   * Constructs a <code>MeasurementCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementCreate} obj Optional instance to populate.
   * @return {module:model/MeasurementCreate} The populated <code>MeasurementCreate</code> instance.
   */
  _createClass(MeasurementCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementCreate();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('geometry')) obj.geometry = _Geometry.Geometry.constructFromObject(data['geometry']);
        if (data.hasOwnProperty('properties')) obj.properties = _MeasurementcreateProperties.MeasurementcreateProperties.constructFromObject(data['properties']);
      }
      return obj;
    }
  }]);
  return MeasurementCreate;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.MeasurementCreate = MeasurementCreate;
MeasurementCreate.TypeEnum = {
  /**
   * value: "Feature"
   * @const
   */
  feature: "Feature"
};
/**
 * @member {module:model/MeasurementCreate.TypeEnum} type
 */
MeasurementCreate.prototype.type = undefined;

/**
 * @member {module:model/Geometry} geometry
 */
MeasurementCreate.prototype.geometry = undefined;

/**
 * @member {module:model/MeasurementcreateProperties} properties
 */
MeasurementCreate.prototype.properties = undefined;