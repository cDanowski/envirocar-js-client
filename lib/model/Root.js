"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Root = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Root model module.
 * @module model/Root
 * @version 1.0.0
 */
var Root = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Root</code>.
   * @alias module:model/Root
   * @class
   */
  function Root() {
    _classCallCheck(this, Root);
  }

  /**
   * Constructs a <code>Root</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Root} obj Optional instance to populate.
   * @return {module:model/Root} The populated <code>Root</code> instance.
   */
  _createClass(Root, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Root();
        if (data.hasOwnProperty('users')) obj.users = _ApiClient.ApiClient.convertToType(data['users'], 'String');
        if (data.hasOwnProperty('tracks')) obj.tracks = _ApiClient.ApiClient.convertToType(data['tracks'], 'String');
        if (data.hasOwnProperty('groups')) obj.groups = _ApiClient.ApiClient.convertToType(data['groups'], 'String');
        if (data.hasOwnProperty('sensors')) obj.sensors = _ApiClient.ApiClient.convertToType(data['sensors'], 'String');
        if (data.hasOwnProperty('phenomenons')) obj.phenomenons = _ApiClient.ApiClient.convertToType(data['phenomenons'], 'String');
        if (data.hasOwnProperty('measurements')) obj.measurements = _ApiClient.ApiClient.convertToType(data['measurements'], 'String');
        if (data.hasOwnProperty('schema')) obj.schema = _ApiClient.ApiClient.convertToType(data['schema'], 'String');
        if (data.hasOwnProperty('termsOfUse')) obj.termsOfUse = _ApiClient.ApiClient.convertToType(data['termsOfUse'], 'String');
        if (data.hasOwnProperty('privacyStatements')) obj.privacyStatements = _ApiClient.ApiClient.convertToType(data['privacyStatements'], 'String');
        if (data.hasOwnProperty('schemas')) obj.schemas = _ApiClient.ApiClient.convertToType(data['schemas'], 'String');
        if (data.hasOwnProperty('api-docs')) obj.apiDocs = _ApiClient.ApiClient.convertToType(data['api-docs'], 'String');
        if (data.hasOwnProperty('badges')) obj.badges = _ApiClient.ApiClient.convertToType(data['badges'], 'String');
        if (data.hasOwnProperty('announcements')) obj.announcements = _ApiClient.ApiClient.convertToType(data['announcements'], 'String');
        if (data.hasOwnProperty('statistics')) obj.statistics = _ApiClient.ApiClient.convertToType(data['statistics'], 'String');
        if (data.hasOwnProperty('counts')) obj.counts = _ApiClient.ApiClient.convertToType(data['counts'], Object);
      }
      return obj;
    }
  }]);
  return Root;
}();
/**
 * @member {String} users
 */
exports.Root = Root;
Root.prototype.users = undefined;

/**
 * @member {String} tracks
 */
Root.prototype.tracks = undefined;

/**
 * @member {String} groups
 */
Root.prototype.groups = undefined;

/**
 * @member {String} sensors
 */
Root.prototype.sensors = undefined;

/**
 * @member {String} phenomenons
 */
Root.prototype.phenomenons = undefined;

/**
 * @member {String} measurements
 */
Root.prototype.measurements = undefined;

/**
 * @member {String} schema
 */
Root.prototype.schema = undefined;

/**
 * @member {String} termsOfUse
 */
Root.prototype.termsOfUse = undefined;

/**
 * @member {String} privacyStatements
 */
Root.prototype.privacyStatements = undefined;

/**
 * @member {String} schemas
 */
Root.prototype.schemas = undefined;

/**
 * @member {String} apiDocs
 */
Root.prototype.apiDocs = undefined;

/**
 * @member {String} badges
 */
Root.prototype.badges = undefined;

/**
 * @member {String} announcements
 */
Root.prototype.announcements = undefined;

/**
 * @member {String} statistics
 */
Root.prototype.statistics = undefined;

/**
 * @member {Object} counts
 */
Root.prototype.counts = undefined;