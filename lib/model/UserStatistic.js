"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserStatistic = void 0;
var _ApiClient = require("../ApiClient");
var _UserStatisticTrackSummaries = require("./UserStatisticTrackSummaries");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The UserStatistic model module.
 * @module model/UserStatistic
 * @version 1.0.0
 */
var UserStatistic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserStatistic</code>.
   * @alias module:model/UserStatistic
   * @class
   * @param distance {Number} 
   * @param duration {Number} 
   */
  function UserStatistic(distance, duration) {
    _classCallCheck(this, UserStatistic);
    this.distance = distance;
    this.duration = duration;
  }

  /**
   * Constructs a <code>UserStatistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserStatistic} obj Optional instance to populate.
   * @return {module:model/UserStatistic} The populated <code>UserStatistic</code> instance.
   */
  _createClass(UserStatistic, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserStatistic();
        if (data.hasOwnProperty('distance')) obj.distance = _ApiClient.ApiClient.convertToType(data['distance'], 'Number');
        if (data.hasOwnProperty('duration')) obj.duration = _ApiClient.ApiClient.convertToType(data['duration'], 'Number');
        if (data.hasOwnProperty('trackCount')) obj.trackCount = _ApiClient.ApiClient.convertToType(data['trackCount'], 'Number');
        if (data.hasOwnProperty('userstatistic')) obj.userstatistic = _ApiClient.ApiClient.convertToType(data['userstatistic'], Object);
        if (data.hasOwnProperty('trackSummaries')) obj.trackSummaries = _ApiClient.ApiClient.convertToType(data['trackSummaries'], [_UserStatisticTrackSummaries.UserStatisticTrackSummaries]);
      }
      return obj;
    }
  }]);
  return UserStatistic;
}();
/**
 * @member {Number} distance
 */
exports.UserStatistic = UserStatistic;
UserStatistic.prototype.distance = undefined;

/**
 * @member {Number} duration
 */
UserStatistic.prototype.duration = undefined;

/**
 * @member {Number} trackCount
 */
UserStatistic.prototype.trackCount = undefined;

/**
 * @member {Object} userstatistic
 */
UserStatistic.prototype.userstatistic = undefined;

/**
 * @member {Array.<module:model/UserStatisticTrackSummaries>} trackSummaries
 */
UserStatistic.prototype.trackSummaries = undefined;