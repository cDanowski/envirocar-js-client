"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserStatisticTrackSummaries = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The UserStatisticTrackSummaries model module.
 * @module model/UserStatisticTrackSummaries
 * @version 1.0.0
 */
var UserStatisticTrackSummaries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserStatisticTrackSummaries</code>.
   * @alias module:model/UserStatisticTrackSummaries
   * @class
   */
  function UserStatisticTrackSummaries() {
    _classCallCheck(this, UserStatisticTrackSummaries);
  }

  /**
   * Constructs a <code>UserStatisticTrackSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserStatisticTrackSummaries} obj Optional instance to populate.
   * @return {module:model/UserStatisticTrackSummaries} The populated <code>UserStatisticTrackSummaries</code> instance.
   */
  _createClass(UserStatisticTrackSummaries, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserStatisticTrackSummaries();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('startPosition')) obj.startPosition = _ApiClient.ApiClient.convertToType(data['startPosition'], Object);
        if (data.hasOwnProperty('endPosition')) obj.endPosition = _ApiClient.ApiClient.convertToType(data['endPosition'], Object);
      }
      return obj;
    }
  }]);
  return UserStatisticTrackSummaries;
}();
/**
 * @member {String} id
 */
exports.UserStatisticTrackSummaries = UserStatisticTrackSummaries;
UserStatisticTrackSummaries.prototype.id = undefined;

/**
 * @member {Object} startPosition
 */
UserStatisticTrackSummaries.prototype.startPosition = undefined;

/**
 * @member {Object} endPosition
 */
UserStatisticTrackSummaries.prototype.endPosition = undefined;