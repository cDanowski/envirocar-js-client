"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhenomenonsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _Phenomenon = require("../model/Phenomenon");
var _PhenomenonCreate = require("../model/PhenomenonCreate");
var _Phenomenons = require("../model/Phenomenons");
var _Range = require("../model/Range");
var _Statistic = require("../model/Statistic");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Phenomenons service.
* @module api/PhenomenonsApi
* @version 1.0.0
*/
var PhenomenonsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PhenomenonsApi. 
  * @alias module:api/PhenomenonsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function PhenomenonsApi(apiClient) {
    _classCallCheck(this, PhenomenonsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createPhenomenon operation.
   * @callback moduleapi/PhenomenonsApi~createPhenomenonCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create new phenomenon.
   * Create new phenomenon.
   * @param {module:model/PhenomenonCreate} body The phenomenon to create.
   * @param {module:api/PhenomenonsApi~createPhenomenonCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(PhenomenonsApi, [{
    key: "createPhenomenon",
    value: function createPhenomenon(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPhenomenon");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/phenomenons', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPhenomenonById operation.
     * @callback moduleapi/PhenomenonsApi~getPhenomenonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Phenomenon{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the phenomenon by id.
     * Get the phenomenon by id.
     * @param {String} phenomenonId The phenomenon id.
     * @param {module:api/PhenomenonsApi~getPhenomenonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getPhenomenonById",
    value: function getPhenomenonById(phenomenonId, callback) {
      var postBody = null;
      // verify the required parameter 'phenomenonId' is set
      if (phenomenonId === undefined || phenomenonId === null) {
        throw new Error("Missing the required parameter 'phenomenonId' when calling getPhenomenonById");
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
      var returnType = _Phenomenon.Phenomenon;
      return this.apiClient.callApi('/phenomenons/{phenomenonId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPhenomenonStatistic operation.
     * @callback moduleapi/PhenomenonsApi~getPhenomenonStatisticCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistic{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the phenomenon statistics.
     * Get the phenomenon statistics.
     * @param {String} phenomenonId The phenomenon id.
     * @param {module:api/PhenomenonsApi~getPhenomenonStatisticCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
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
     * Callback function to receive the result of the getPhenomenons operation.
     * @callback moduleapi/PhenomenonsApi~getPhenomenonsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Phenomenons{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the phenomenon listing.
     * Get the phenomenon listing.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/PhenomenonsApi~getPhenomenonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getPhenomenons",
    value: function getPhenomenons(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'page': opts['page']
      };
      var headerParams = {
        'Range': opts['range']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Phenomenons.Phenomenons;
      return this.apiClient.callApi('/phenomenons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return PhenomenonsApi;
}();
exports.PhenomenonsApi = PhenomenonsApi;