"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Activity = void 0;
var _ApiClient = require("../ApiClient");
var _User = require("./User");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Activity model module.
 * @module model/Activity
 * @version 1.0.0
 */
var Activity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Activity</code>.
   * @alias module:model/Activity
   * @class
   * @param time {} 
   * @param user {} 
   * @param type {} 
   */
  function Activity(time, user, type) {
    _classCallCheck(this, Activity);
    this.time = time;
    this.user = user;
    this.type = type;
  }

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Activity} obj Optional instance to populate.
   * @return {module:model/Activity} The populated <code>Activity</code> instance.
   */
  _createClass(Activity, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Activity();
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('user')) obj.user = _User.User.constructFromObject(data['user']);
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return Activity;
}();
/**
 * @member {Date} time
 */
exports.Activity = Activity;
Activity.prototype.time = undefined;

/**
 * @member {module:model/User} user
 */
Activity.prototype.user = undefined;

/**
 * @member {String} type
 */
Activity.prototype.type = undefined;

// Implement OneOfactivity interface: