"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgesApi = void 0;
var _ApiClient = require("../ApiClient");
var _Badges = require("../model/Badges");
var _Exception = require("../model/Exception");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Badges service.
* @module api/BadgesApi
* @version 1.0.0
*/
var BadgesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BadgesApi. 
  * @alias module:api/BadgesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function BadgesApi(apiClient) {
    _classCallCheck(this, BadgesApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the getBadges operation.
   * @callback moduleapi/BadgesApi~getBadgesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Badges{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of badges.
   * Get the list of badges.
   * @param {module:api/BadgesApi~getBadgesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(BadgesApi, [{
    key: "getBadges",
    value: function getBadges(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Badges.Badges;
      return this.apiClient.callApi('/badges', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return BadgesApi;
}();
exports.BadgesApi = BadgesApi;