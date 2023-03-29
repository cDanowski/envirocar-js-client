"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatisticsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _Statistic = require("../model/Statistic");
var _Statistics = require("../model/Statistics");
var _UserStatistic = require("../model/UserStatistic");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Statistics service.
* @module api/StatisticsApi
* @version 1.0.0
*/
var StatisticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StatisticsApi. 
  * @alias module:api/StatisticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function StatisticsApi(apiClient) {
    _classCallCheck(this, StatisticsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the getPhenomenonStatistic operation.
   * @callback moduleapi/StatisticsApi~getPhenomenonStatisticCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Statistic{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the phenomenon statistics.
   * Get the phenomenon statistics.
   * @param {String} phenomenonId The phenomenon id.
   * @param {module:api/StatisticsApi~getPhenomenonStatisticCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(StatisticsApi, [{
    key: "getPhenomenonStatistic",
    value: function getPhenomenonStatistic(phenomenonId, callback) {
      var postBody = null;
      // verify the required parameter 'phenomenonId' is set
      if (phenomenonId === undefined || phenomenonId === null) {
        throw new Error("Missing the required parameter 'phenomenonId' when calling getPhenomenonStatistic");
      }
      var pathParams = {
        'phenomenonId': phenomenonId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Statistic.Statistic;
      return this.apiClient.callApi('/phenomenons/{phenomenonId}/statistic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensorStatistics operation.
     * @callback moduleapi/StatisticsApi~getSensorStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sensor statistics.
     * Get the Sensor statistics.
     * @param {String} sensorId The Sensor id.
     * @param {module:api/StatisticsApi~getSensorStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getSensorStatistics",
    value: function getSensorStatistics(sensorId, callback) {
      var postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getSensorStatistics");
      }
      var pathParams = {
        'sensorId': sensorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Statistics.Statistics;
      return this.apiClient.callApi('/sensors/{sensorId}/statistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getStatisticsOfUser operation.
     * @callback moduleapi/StatisticsApi~getStatisticsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user statistics.
     * Get the user statistics.
     * @param {String} userId The user id.
     * @param {module:api/StatisticsApi~getStatisticsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getStatisticsOfUser",
    value: function getStatisticsOfUser(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getStatisticsOfUser");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Statistics.Statistics;
      return this.apiClient.callApi('/users/{userId}/statistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTrackStatistics operation.
     * @callback moduleapi/StatisticsApi~getTrackStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the statistics of a track.
     * Get the statistics of a track.
     * @param {String} trackId The track id.
     * @param {module:api/StatisticsApi~getTrackStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTrackStatistics",
    value: function getTrackStatistics(trackId, callback) {
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling getTrackStatistics");
      }
      var pathParams = {
        'trackId': trackId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Statistics.Statistics;
      return this.apiClient.callApi('/tracks/{trackId}/statistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserStatistics operation.
     * @callback moduleapi/StatisticsApi~getUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserStatistic{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user statistics.
     * Get the user statistics.
     * @param {String} userId The user id.
     * @param {module:api/StatisticsApi~getUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserStatistics",
    value: function getUserStatistics(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserStatistics");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _UserStatistic.UserStatistic;
      return this.apiClient.callApi('/users/{userId}/userStatistic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return StatisticsApi;
}();
exports.StatisticsApi = StatisticsApi;