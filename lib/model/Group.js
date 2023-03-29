"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;
var _ApiClient = require("../ApiClient");
var _User = require("./User");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
var Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   * @param description {String} 
   * @param name {String} 
   */
  function Group(description, name) {
    _classCallCheck(this, Group);
    this.description = description;
    this.name = name;
  }

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  _createClass(Group, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('owner')) obj.owner = _User.User.constructFromObject(data['owner']);
      }
      return obj;
    }
  }]);
  return Group;
}();
/**
 * @member {Date} created
 */
exports.Group = Group;
Group.prototype.created = undefined;

/**
 * @member {String} description
 */
Group.prototype.description = undefined;

/**
 * @member {Date} modified
 */
Group.prototype.modified = undefined;

/**
 * @member {String} name
 */
Group.prototype.name = undefined;

/**
 * @member {module:model/User} owner
 */
Group.prototype.owner = undefined;