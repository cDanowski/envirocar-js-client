"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Statistic = void 0;
var _ApiClient = require("../ApiClient");
var _Phenomenon = require("./Phenomenon");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Statistic model module.
 * @module model/Statistic
 * @version 1.0.0
 */
var Statistic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Statistic</code>.
   * @alias module:model/Statistic
   * @class
   * @param phenomenon {module:model/Phenomenon} 
   * @param measurements {Number} 
   * @param users {Number} 
   * @param tracks {Number} 
   * @param min {Number} 
   * @param max {Number} 
   * @param avg {Number} 
   */
  function Statistic(phenomenon, measurements, users, tracks, min, max, avg) {
    _classCallCheck(this, Statistic);
    this.phenomenon = phenomenon;
    this.measurements = measurements;
    this.users = users;
    this.tracks = tracks;
    this.min = min;
    this.max = max;
    this.avg = avg;
  }

  /**
   * Constructs a <code>Statistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistic} obj Optional instance to populate.
   * @return {module:model/Statistic} The populated <code>Statistic</code> instance.
   */
  _createClass(Statistic, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Statistic();
        if (data.hasOwnProperty('phenomenon')) obj.phenomenon = _Phenomenon.Phenomenon.constructFromObject(data['phenomenon']);
        if (data.hasOwnProperty('measurements')) obj.measurements = _ApiClient.ApiClient.convertToType(data['measurements'], 'Number');
        if (data.hasOwnProperty('users')) obj.users = _ApiClient.ApiClient.convertToType(data['users'], 'Number');
        if (data.hasOwnProperty('tracks')) obj.tracks = _ApiClient.ApiClient.convertToType(data['tracks'], 'Number');
        if (data.hasOwnProperty('sensors')) obj.sensors = _ApiClient.ApiClient.convertToType(data['sensors'], 'Number');
        if (data.hasOwnProperty('min')) obj.min = _ApiClient.ApiClient.convertToType(data['min'], 'Number');
        if (data.hasOwnProperty('max')) obj.max = _ApiClient.ApiClient.convertToType(data['max'], 'Number');
        if (data.hasOwnProperty('avg')) obj.avg = _ApiClient.ApiClient.convertToType(data['avg'], 'Number');
      }
      return obj;
    }
  }]);
  return Statistic;
}();
/**
 * @member {module:model/Phenomenon} phenomenon
 */
exports.Statistic = Statistic;
Statistic.prototype.phenomenon = undefined;

/**
 * @member {Number} measurements
 */
Statistic.prototype.measurements = undefined;

/**
 * @member {Number} users
 */
Statistic.prototype.users = undefined;

/**
 * @member {Number} tracks
 */
Statistic.prototype.tracks = undefined;

/**
 * @member {Number} sensors
 */
Statistic.prototype.sensors = undefined;

/**
 * @member {Number} min
 */
Statistic.prototype.min = undefined;

/**
 * @member {Number} max
 */
Statistic.prototype.max = undefined;

/**
 * @member {Number} avg
 */
Statistic.prototype.avg = undefined;