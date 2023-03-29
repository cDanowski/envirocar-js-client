"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionalUserProperties = void 0;
var _ApiClient = require("../ApiClient");
var _Geometry = require("./Geometry");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The OptionalUserProperties model module.
 * @module model/OptionalUserProperties
 * @version 1.0.0
 */
var OptionalUserProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OptionalUserProperties</code>.
   * @alias module:model/OptionalUserProperties
   * @class
   */
  function OptionalUserProperties() {
    _classCallCheck(this, OptionalUserProperties);
  }

  /**
   * Constructs a <code>OptionalUserProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionalUserProperties} obj Optional instance to populate.
   * @return {module:model/OptionalUserProperties} The populated <code>OptionalUserProperties</code> instance.
   */
  _createClass(OptionalUserProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OptionalUserProperties();
        if (data.hasOwnProperty('firstName')) obj.firstName = _ApiClient.ApiClient.convertToType(data['firstName'], 'String');
        if (data.hasOwnProperty('lastName')) obj.lastName = _ApiClient.ApiClient.convertToType(data['lastName'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('location')) obj.location = _Geometry.Geometry.constructFromObject(data['location']);
        if (data.hasOwnProperty('aboutMe')) obj.aboutMe = _ApiClient.ApiClient.convertToType(data['aboutMe'], 'String');
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('dayOfBirth')) obj.dayOfBirth = _ApiClient.ApiClient.convertToType(data['dayOfBirth'], 'Date');
        if (data.hasOwnProperty('gender')) obj.gender = _ApiClient.ApiClient.convertToType(data['gender'], 'String');
        if (data.hasOwnProperty('language')) obj.language = _ApiClient.ApiClient.convertToType(data['language'], 'String');
        if (data.hasOwnProperty('badges')) obj.badges = _ApiClient.ApiClient.convertToType(data['badges'], ['String']);
        if (data.hasOwnProperty('acceptedTermsOfUseVersion')) obj.acceptedTermsOfUseVersion = _ApiClient.ApiClient.convertToType(data['acceptedTermsOfUseVersion'], 'Date');
        if (data.hasOwnProperty('acceptedPrivacyStatementVersion')) obj.acceptedPrivacyStatementVersion = _ApiClient.ApiClient.convertToType(data['acceptedPrivacyStatementVersion'], 'Date');
      }
      return obj;
    }
  }]);
  return OptionalUserProperties;
}();
/**
 * @member {String} firstName
 */
exports.OptionalUserProperties = OptionalUserProperties;
OptionalUserProperties.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
OptionalUserProperties.prototype.lastName = undefined;

/**
 * @member {String} country
 */
OptionalUserProperties.prototype.country = undefined;

/**
 * @member {module:model/Geometry} location
 */
OptionalUserProperties.prototype.location = undefined;

/**
 * @member {String} aboutMe
 */
OptionalUserProperties.prototype.aboutMe = undefined;

/**
 * @member {String} url
 */
OptionalUserProperties.prototype.url = undefined;

/**
 * @member {Date} dayOfBirth
 */
OptionalUserProperties.prototype.dayOfBirth = undefined;

/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
OptionalUserProperties.GenderEnum = {
  /**
   * value: "m"
   * @const
   */
  m: "m",
  /**
   * value: "f"
   * @const
   */
  f: "f"
};
/**
 * @member {module:model/OptionalUserProperties.GenderEnum} gender
 */
OptionalUserProperties.prototype.gender = undefined;

/**
 * @member {String} language
 */
OptionalUserProperties.prototype.language = undefined;

/**
 * @member {Array.<String>} badges
 */
OptionalUserProperties.prototype.badges = undefined;

/**
 * @member {Date} acceptedTermsOfUseVersion
 */
OptionalUserProperties.prototype.acceptedTermsOfUseVersion = undefined;

/**
 * @member {Date} acceptedPrivacyStatementVersion
 */
OptionalUserProperties.prototype.acceptedPrivacyStatementVersion = undefined;