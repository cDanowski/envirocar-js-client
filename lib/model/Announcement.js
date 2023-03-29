"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Announcement = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Announcement model module.
 * @module model/Announcement
 * @version 1.0.0
 */
var Announcement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Announcement</code>.
   * @alias module:model/Announcement
   * @class
   * @param id {String} 
   * @param category {String} 
   * @param priority {String} 
   * @param content {Object.<String, String>} 
   */
  function Announcement(id, category, priority, content) {
    _classCallCheck(this, Announcement);
    this.id = id;
    this.category = category;
    this.priority = priority;
    this.content = content;
  }

  /**
   * Constructs a <code>Announcement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Announcement} obj Optional instance to populate.
   * @return {module:model/Announcement} The populated <code>Announcement</code> instance.
   */
  _createClass(Announcement, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Announcement();
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
        if (data.hasOwnProperty('priority')) obj.priority = _ApiClient.ApiClient.convertToType(data['priority'], 'String');
        if (data.hasOwnProperty('content')) obj.content = _ApiClient.ApiClient.convertToType(data['content'], {
          'String': 'String'
        });
      }
      return obj;
    }
  }]);
  return Announcement;
}();
/**
 * @member {Date} created
 */
exports.Announcement = Announcement;
Announcement.prototype.created = undefined;

/**
 * @member {Date} modified
 */
Announcement.prototype.modified = undefined;

/**
 * @member {String} id
 */
Announcement.prototype.id = undefined;

/**
 * @member {String} category
 */
Announcement.prototype.category = undefined;

/**
 * @member {String} priority
 */
Announcement.prototype.priority = undefined;

/**
 * @member {Object.<String, String>} content
 */
Announcement.prototype.content = undefined;