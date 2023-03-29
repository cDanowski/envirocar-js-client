"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Announcements = void 0;
var _ApiClient = require("../ApiClient");
var _Announcement = require("./Announcement");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Announcements model module.
 * @module model/Announcements
 * @version 1.0.0
 */
var Announcements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Announcements</code>.
   * @alias module:model/Announcements
   * @class
   * @param announcements {Array.<module:model/Announcement>} 
   */
  function Announcements(announcements) {
    _classCallCheck(this, Announcements);
    this.announcements = announcements;
  }

  /**
   * Constructs a <code>Announcements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Announcements} obj Optional instance to populate.
   * @return {module:model/Announcements} The populated <code>Announcements</code> instance.
   */
  _createClass(Announcements, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Announcements();
        if (data.hasOwnProperty('announcements')) obj.announcements = _ApiClient.ApiClient.convertToType(data['announcements'], [_Announcement.Announcement]);
      }
      return obj;
    }
  }]);
  return Announcements;
}();
/**
 * @member {Array.<module:model/Announcement>} announcements
 */
exports.Announcements = Announcements;
Announcements.prototype.announcements = undefined;