"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackModify = void 0;
var _ApiClient = require("../ApiClient");
var _MeasurementCreate = require("./MeasurementCreate");
var _TrackmodifyProperties = require("./TrackmodifyProperties");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TrackModify model module.
 * @module model/TrackModify
 * @version 1.0.0
 */
var TrackModify = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackModify</code>.
   * @alias module:model/TrackModify
   * @class
   * @param type {module:model/TrackModify.TypeEnum} 
   * @param properties {module:model/TrackmodifyProperties} 
   */
  function TrackModify(type, properties) {
    _classCallCheck(this, TrackModify);
    this.type = type;
    this.properties = properties;
  }

  /**
   * Constructs a <code>TrackModify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackModify} obj Optional instance to populate.
   * @return {module:model/TrackModify} The populated <code>TrackModify</code> instance.
   */
  _createClass(TrackModify, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackModify();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('properties')) obj.properties = _TrackmodifyProperties.TrackmodifyProperties.constructFromObject(data['properties']);
        if (data.hasOwnProperty('features')) obj.features = _ApiClient.ApiClient.convertToType(data['features'], [_MeasurementCreate.MeasurementCreate]);
      }
      return obj;
    }
  }]);
  return TrackModify;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TrackModify = TrackModify;
TrackModify.TypeEnum = {
  /**
   * value: "FeatureCollection"
   * @const
   */
  featureCollection: "FeatureCollection"
};
/**
 * @member {module:model/TrackModify.TypeEnum} type
 */
TrackModify.prototype.type = undefined;

/**
 * @member {module:model/TrackmodifyProperties} properties
 */
TrackModify.prototype.properties = undefined;

/**
 * @member {Array.<module:model/MeasurementCreate>} features
 */
TrackModify.prototype.features = undefined;