"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackReference = void 0;
var _ApiClient = require("../ApiClient");
var _Sensor = require("./Sensor");
var _TrackStatus = require("./TrackStatus");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TrackReference model module.
 * @module model/TrackReference
 * @version 1.0.0
 */
var TrackReference = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackReference</code>.
   * @alias module:model/TrackReference
   * @class
   * @param id {String} 
   */
  function TrackReference(id) {
    _classCallCheck(this, TrackReference);
    this.id = id;
  }

  /**
   * Constructs a <code>TrackReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackReference} obj Optional instance to populate.
   * @return {module:model/TrackReference} The populated <code>TrackReference</code> instance.
   */
  _createClass(TrackReference, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackReference();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('begin')) obj.begin = _ApiClient.ApiClient.convertToType(data['begin'], 'Date');
        if (data.hasOwnProperty('end')) obj.end = _ApiClient.ApiClient.convertToType(data['end'], 'Date');
        if (data.hasOwnProperty('sensor')) obj.sensor = _Sensor.Sensor.constructFromObject(data['sensor']);
        if (data.hasOwnProperty('length')) obj.length = _ApiClient.ApiClient.convertToType(data['length'], 'Number');
        if (data.hasOwnProperty('status')) obj.status = _TrackStatus.TrackStatus.constructFromObject(data['status']);
      }
      return obj;
    }
  }]);
  return TrackReference;
}();
/**
 * @member {String} id
 */
exports.TrackReference = TrackReference;
TrackReference.prototype.id = undefined;

/**
 * @member {Date} modified
 */
TrackReference.prototype.modified = undefined;

/**
 * @member {String} name
 */
TrackReference.prototype.name = undefined;

/**
 * @member {Date} begin
 */
TrackReference.prototype.begin = undefined;

/**
 * @member {Date} end
 */
TrackReference.prototype.end = undefined;

/**
 * @member {module:model/Sensor} sensor
 */
TrackReference.prototype.sensor = undefined;

/**
 * @member {Number} length
 */
TrackReference.prototype.length = undefined;

/**
 * @member {module:model/TrackStatus} status
 */
TrackReference.prototype.status = undefined;