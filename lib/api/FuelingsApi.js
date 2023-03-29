"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FuelingsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _Fueling = require("../model/Fueling");
var _FuelingCreate = require("../model/FuelingCreate");
var _Fuelings = require("../model/Fuelings");
var _Range = require("../model/Range");
var _TemporalFilter = require("../model/TemporalFilter");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Fuelings service.
* @module api/FuelingsApi
* @version 1.0.0
*/
var FuelingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FuelingsApi. 
  * @alias module:api/FuelingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function FuelingsApi(apiClient) {
    _classCallCheck(this, FuelingsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createFueling operation.
   * @callback moduleapi/FuelingsApi~createFuelingCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new fueling for the user.
   * Create a new fueling for the user.
   * @param {module:model/FuelingCreate} body The fueling to create.
   * @param {String} userId The user id.
   * @param {module:api/FuelingsApi~createFuelingCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(FuelingsApi, [{
    key: "createFueling",
    value: function createFueling(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFueling");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createFueling");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}/fuelings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteFueling operation.
     * @callback moduleapi/FuelingsApi~deleteFuelingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the fueling for the user.
     * Delete the fueling for the user.
     * @param {String} userId The user id.
     * @param {String} fuelingId The fueling id.
     * @param {module:api/FuelingsApi~deleteFuelingCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFueling",
    value: function deleteFueling(userId, fuelingId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteFueling");
      }
      // verify the required parameter 'fuelingId' is set
      if (fuelingId === undefined || fuelingId === null) {
        throw new Error("Missing the required parameter 'fuelingId' when calling deleteFueling");
      }
      var pathParams = {
        'userId': userId,
        'fuelingId': fuelingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}/fuelings/{fuelingId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFueling operation.
     * @callback moduleapi/FuelingsApi~getFuelingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Fueling{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the fueling for the user.
     * Get the fueling for the user.
     * @param {String} userId The user id.
     * @param {String} fuelingId The fueling id.
     * @param {module:api/FuelingsApi~getFuelingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFueling",
    value: function getFueling(userId, fuelingId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFueling");
      }
      // verify the required parameter 'fuelingId' is set
      if (fuelingId === undefined || fuelingId === null) {
        throw new Error("Missing the required parameter 'fuelingId' when calling getFueling");
      }
      var pathParams = {
        'userId': userId,
        'fuelingId': fuelingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Fueling.Fueling;
      return this.apiClient.callApi('/users/{userId}/fuelings/{fuelingId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFuelings operation.
     * @callback moduleapi/FuelingsApi~getFuelingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Fuelings{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the fuelings for the user.
     * Get the fuelings for the user.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemporalFilter} opts.after The time instant or interval to be applied with the &#x60;after&#x60; operator.
     * @param {module:model/TemporalFilter} opts.before The time instant or interval to be applied with the &#x60;before&#x60; operator.
     * @param {module:model/TemporalFilter} opts.begins The time instant or interval to be applied with the &#x60;begins&#x60; operator.
     * @param {module:model/TemporalFilter} opts.begunBy The time instant or interval to be applied with the &#x60;begunBy&#x60; operator.
     * @param {module:model/TemporalFilter} opts.contains The time instant or interval to be applied with the &#x60;contains&#x60; operator.
     * @param {module:model/TemporalFilter} opts.during The time instant or interval to be applied with the &#x60;during&#x60; operator.
     * @param {module:model/TemporalFilter} opts.endedBy The time instant or interval to be applied with the &#x60;endedBy&#x60; operator.
     * @param {module:model/TemporalFilter} opts.ends The time instant or interval to be applied with the &#x60;ends&#x60; operator.
     * @param {module:model/TemporalFilter} opts.equals The time instant or interval to be applied with the &#x60;equals&#x60; operator.
     * @param {module:model/TemporalFilter} opts.meets The time instant or interval to be applied with the &#x60;meets&#x60; operator.
     * @param {module:model/TemporalFilter} opts.metBy The time instant or interval to be applied with the &#x60;metBy&#x60; operator.
     * @param {module:model/TemporalFilter} opts.overlapped The time instant or interval to be applied with the &#x60;overlapped&#x60; operator.
     * @param {module:model/TemporalFilter} opts.overlaps The time instant or interval to be applied with the &#x60;overlaps&#x60; operator.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/FuelingsApi~getFuelingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFuelings",
    value: function getFuelings(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFuelings");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'after': opts['after'],
        'before': opts['before'],
        'begins': opts['begins'],
        'begunBy': opts['begunBy'],
        'contains': opts['contains'],
        'during': opts['during'],
        'endedBy': opts['endedBy'],
        'ends': opts['ends'],
        'equals': opts['equals'],
        'meets': opts['meets'],
        'metBy': opts['metBy'],
        'overlapped': opts['overlapped'],
        'overlaps': opts['overlaps'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      var headerParams = {
        'Range': opts['range']
      };
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Fuelings.Fuelings;
      return this.apiClient.callApi('/users/{userId}/fuelings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return FuelingsApi;
}();
exports.FuelingsApi = FuelingsApi;