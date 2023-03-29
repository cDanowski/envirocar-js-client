"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackProperties = void 0;
var _ApiClient = require("../ApiClient");
var _Sensor = require("./Sensor");
var _TrackStatus = require("./TrackStatus");
var _User = require("./User");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TrackProperties model module.
 * @module model/TrackProperties
 * @version 1.0.0
 */
var TrackProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackProperties</code>.
   * @alias module:model/TrackProperties
   * @class
   * @param id {String} 
   * @param sensor {module:model/Sensor} 
   */
  function TrackProperties(id, sensor) {
    _classCallCheck(this, TrackProperties);
    this.id = id;
    this.sensor = sensor;
  }

  /**
   * Constructs a <code>TrackProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackProperties} obj Optional instance to populate.
   * @return {module:model/TrackProperties} The populated <code>TrackProperties</code> instance.
   */
  _createClass(TrackProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackProperties();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('sensor')) obj.sensor = _Sensor.Sensor.constructFromObject(data['sensor']);
        if (data.hasOwnProperty('user')) obj.user = _User.User.constructFromObject(data['user']);
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('appVersion')) obj.appVersion = _ApiClient.ApiClient.convertToType(data['appVersion'], 'String');
        if (data.hasOwnProperty('obdDevice')) obj.obdDevice = _ApiClient.ApiClient.convertToType(data['obdDevice'], 'String');
        if (data.hasOwnProperty('touVersion')) obj.touVersion = _ApiClient.ApiClient.convertToType(data['touVersion'], 'Date');
        if (data.hasOwnProperty('length')) obj.length = _ApiClient.ApiClient.convertToType(data['length'], 'Number');
        if (data.hasOwnProperty('begin')) obj.begin = _ApiClient.ApiClient.convertToType(data['begin'], 'Date');
        if (data.hasOwnProperty('end')) obj.end = _ApiClient.ApiClient.convertToType(data['end'], 'Date');
        if (data.hasOwnProperty('measurementProfile')) obj.measurementProfile = _ApiClient.ApiClient.convertToType(data['measurementProfile'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _TrackStatus.TrackStatus.constructFromObject(data['status']);
      }
      return obj;
    }
  }]);
  return TrackProperties;
}();
/**
 * @member {String} id
 */
exports.TrackProperties = TrackProperties;
TrackProperties.prototype.id = undefined;

/**
 * @member {Date} created
 */
TrackProperties.prototype.created = undefined;

/**
 * @member {Date} modified
 */
TrackProperties.prototype.modified = undefined;

/**
 * @member {module:model/Sensor} sensor
 */
TrackProperties.prototype.sensor = undefined;

/**
 * @member {module:model/User} user
 */
TrackProperties.prototype.user = undefined;

/**
 * @member {String} name
 */
TrackProperties.prototype.name = undefined;

/**
 * @member {String} description
 */
TrackProperties.prototype.description = undefined;

/**
 * @member {String} appVersion
 */
TrackProperties.prototype.appVersion = undefined;

/**
 * @member {String} obdDevice
 */
TrackProperties.prototype.obdDevice = undefined;

/**
 * @member {Date} touVersion
 */
TrackProperties.prototype.touVersion = undefined;

/**
 * @member {Number} length
 */
TrackProperties.prototype.length = undefined;

/**
 * @member {Date} begin
 */
TrackProperties.prototype.begin = undefined;

/**
 * @member {Date} end
 */
TrackProperties.prototype.end = undefined;

/**
 * @member {String} measurementProfile
 */
TrackProperties.prototype.measurementProfile = undefined;

/**
 * @member {module:model/TrackStatus} status
 */
TrackProperties.prototype.status = undefined;