"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackcreateProperties = void 0;
var _ApiClient = require("../ApiClient");
var _TrackStatus = require("./TrackStatus");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TrackcreateProperties model module.
 * @module model/TrackcreateProperties
 * @version 1.0.0
 */
var TrackcreateProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackcreateProperties</code>.
   * @alias module:model/TrackcreateProperties
   * @class
   * @param sensor {String} the name of an existing sensor resource
   */
  function TrackcreateProperties(sensor) {
    _classCallCheck(this, TrackcreateProperties);
    this.sensor = sensor;
  }

  /**
   * Constructs a <code>TrackcreateProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackcreateProperties} obj Optional instance to populate.
   * @return {module:model/TrackcreateProperties} The populated <code>TrackcreateProperties</code> instance.
   */
  _createClass(TrackcreateProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackcreateProperties();
        if (data.hasOwnProperty('sensor')) obj.sensor = _ApiClient.ApiClient.convertToType(data['sensor'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('appVersion')) obj.appVersion = _ApiClient.ApiClient.convertToType(data['appVersion'], 'String');
        if (data.hasOwnProperty('obdDevice')) obj.obdDevice = _ApiClient.ApiClient.convertToType(data['obdDevice'], 'String');
        if (data.hasOwnProperty('touVersion')) obj.touVersion = _ApiClient.ApiClient.convertToType(data['touVersion'], 'String');
        if (data.hasOwnProperty('length')) obj.length = _ApiClient.ApiClient.convertToType(data['length'], 'Number');
        if (data.hasOwnProperty('status')) obj.status = _TrackStatus.TrackStatus.constructFromObject(data['status']);
      }
      return obj;
    }
  }]);
  return TrackcreateProperties;
}();
/**
 * the name of an existing sensor resource
 * @member {String} sensor
 */
exports.TrackcreateProperties = TrackcreateProperties;
TrackcreateProperties.prototype.sensor = undefined;

/**
 * @member {String} name
 */
TrackcreateProperties.prototype.name = undefined;

/**
 * @member {String} description
 */
TrackcreateProperties.prototype.description = undefined;

/**
 * @member {String} appVersion
 */
TrackcreateProperties.prototype.appVersion = undefined;

/**
 * @member {String} obdDevice
 */
TrackcreateProperties.prototype.obdDevice = undefined;

/**
 * @member {String} touVersion
 */
TrackcreateProperties.prototype.touVersion = undefined;

/**
 * @member {Number} length
 */
TrackcreateProperties.prototype.length = undefined;

/**
 * @member {module:model/TrackStatus} status
 */
TrackcreateProperties.prototype.status = undefined;