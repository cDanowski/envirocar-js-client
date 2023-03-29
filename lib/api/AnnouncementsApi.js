"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnouncementsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Announcements = require("../model/Announcements");
var _Exception = require("../model/Exception");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Announcements service.
* @module api/AnnouncementsApi
* @version 1.0.0
*/
var AnnouncementsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AnnouncementsApi. 
  * @alias module:api/AnnouncementsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function AnnouncementsApi(apiClient) {
    _classCallCheck(this, AnnouncementsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the getAnnouncements operation.
   * @callback moduleapi/AnnouncementsApi~getAnnouncementsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Announcements{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of announcements.
   * Get the list of announcements.
   * @param {module:api/AnnouncementsApi~getAnnouncementsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(AnnouncementsApi, [{
    key: "getAnnouncements",
    value: function getAnnouncements(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Announcements.Announcements;
      return this.apiClient.callApi('/announcements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return AnnouncementsApi;
}();
exports.AnnouncementsApi = AnnouncementsApi;