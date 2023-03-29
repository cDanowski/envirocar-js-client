"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasurementProperties = void 0;
var _ApiClient = require("../ApiClient");
var _Sensor = require("./Sensor");
var _User = require("./User");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MeasurementProperties model module.
 * @module model/MeasurementProperties
 * @version 1.0.0
 */
var MeasurementProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementProperties</code>.
   * @alias module:model/MeasurementProperties
   * @class
   * @param id {String} 
   * @param time {Date} 
   * @param phenomenons {Object} 
   */
  function MeasurementProperties(id, time, phenomenons) {
    _classCallCheck(this, MeasurementProperties);
    this.id = id;
    this.time = time;
    this.phenomenons = phenomenons;
  }

  /**
   * Constructs a <code>MeasurementProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementProperties} obj Optional instance to populate.
   * @return {module:model/MeasurementProperties} The populated <code>MeasurementProperties</code> instance.
   */
  _createClass(MeasurementProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementProperties();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('sensor')) obj.sensor = _Sensor.Sensor.constructFromObject(data['sensor']);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('user')) obj.user = _User.User.constructFromObject(data['user']);
        if (data.hasOwnProperty('track')) obj.track = _ApiClient.ApiClient.convertToType(data['track'], 'String');
        if (data.hasOwnProperty('phenomenons')) obj.phenomenons = _ApiClient.ApiClient.convertToType(data['phenomenons'], Object);
      }
      return obj;
    }
  }]);
  return MeasurementProperties;
}();
/**
 * @member {String} id
 */
exports.MeasurementProperties = MeasurementProperties;
MeasurementProperties.prototype.id = undefined;

/**
 * @member {Date} created
 */
MeasurementProperties.prototype.created = undefined;

/**
 * @member {Date} modified
 */
MeasurementProperties.prototype.modified = undefined;

/**
 * @member {module:model/Sensor} sensor
 */
MeasurementProperties.prototype.sensor = undefined;

/**
 * @member {Date} time
 */
MeasurementProperties.prototype.time = undefined;

/**
 * @member {module:model/User} user
 */
MeasurementProperties.prototype.user = undefined;

/**
 * @member {String} track
 */
MeasurementProperties.prototype.track = undefined;

/**
 * @member {Object} phenomenons
 */
MeasurementProperties.prototype.phenomenons = undefined;