"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _ApiClient = require("../ApiClient");
var _Measurement = require("./Measurement");
var _TrackProperties = require("./TrackProperties");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Track model module.
 * @module model/Track
 * @version 1.0.0
 */
var Track = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Track</code>.
   * @alias module:model/Track
   * @class
   * @param type {module:model/Track.TypeEnum} 
   * @param features {Array.<module:model/Measurement>} 
   * @param properties {module:model/TrackProperties} 
   */
  function Track(type, features, properties) {
    _classCallCheck(this, Track);
    this.type = type;
    this.features = features;
    this.properties = properties;
  }

  /**
   * Constructs a <code>Track</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Track} obj Optional instance to populate.
   * @return {module:model/Track} The populated <code>Track</code> instance.
   */
  _createClass(Track, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Track();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('features')) obj.features = _ApiClient.ApiClient.convertToType(data['features'], [_Measurement.Measurement]);
        if (data.hasOwnProperty('properties')) obj.properties = _TrackProperties.TrackProperties.constructFromObject(data['properties']);
      }
      return obj;
    }
  }]);
  return Track;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.Track = Track;
Track.TypeEnum = {
  /**
   * value: "FeatureCollection"
   * @const
   */
  featureCollection: "FeatureCollection"
};
/**
 * @member {module:model/Track.TypeEnum} type
 */
Track.prototype.type = undefined;

/**
 * @member {Array.<module:model/Measurement>} features
 */
Track.prototype.features = undefined;

/**
 * @member {module:model/TrackProperties} properties
 */
Track.prototype.properties = undefined;