"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SensorsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _Range = require("../model/Range");
var _Sensor = require("../model/Sensor");
var _SensorCreate = require("../model/SensorCreate");
var _Sensors = require("../model/Sensors");
var _Statistics = require("../model/Statistics");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Sensors service.
* @module api/SensorsApi
* @version 1.0.0
*/
var SensorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SensorsApi. 
  * @alias module:api/SensorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function SensorsApi(apiClient) {
    _classCallCheck(this, SensorsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createSensor operation.
   * @callback moduleapi/SensorsApi~createSensorCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new Sensor.
   * Create a new Sensor.
   * @param {module:model/SensorCreate} body The sensor to create.
   * @param {module:api/SensorsApi~createSensorCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(SensorsApi, [{
    key: "createSensor",
    value: function createSensor(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSensor");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/sensors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createSensorForUser operation.
     * @callback moduleapi/SensorsApi~createSensorForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Sensor.
     * Create a new Sensor.
     * @param {module:model/SensorCreate} body The sensor to create.
     * @param {String} userId The user id.
     * @param {module:api/SensorsApi~createSensorForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createSensorForUser",
    value: function createSensorForUser(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSensorForUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createSensorForUser");
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
      return this.apiClient.callApi('/users/{userId}/sensors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getMeasurementSensor operation.
     * @callback moduleapi/SensorsApi~getMeasurementSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the sensor of a measurement.
     * Get the sensor of a measurement.
     * @param {String} measurementId The measurement id.
     * @param {module:api/SensorsApi~getMeasurementSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getMeasurementSensor",
    value: function getMeasurementSensor(measurementId, callback) {
      var postBody = null;
      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling getMeasurementSensor");
      }
      var pathParams = {
        'measurementId': measurementId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Sensor.Sensor;
      return this.apiClient.callApi('/measurements/{measurementId}/sensor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensorById operation.
     * @callback moduleapi/SensorsApi~getSensorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sensor by id.
     * Get the Sensor by id.
     * @param {String} sensorId The Sensor id.
     * @param {module:api/SensorsApi~getSensorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getSensorById",
    value: function getSensorById(sensorId, callback) {
      var postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getSensorById");
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
      var returnType = _Sensor.Sensor;
      return this.apiClient.callApi('/sensors/{sensorId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensorStatistics operation.
     * @callback moduleapi/SensorsApi~getSensorStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sensor statistics.
     * Get the Sensor statistics.
     * @param {String} sensorId The Sensor id.
     * @param {module:api/SensorsApi~getSensorStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getSensors operation.
     * @callback moduleapi/SensorsApi~getSensorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensors{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sensor listing.
     * Get the Sensor listing.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type The Sensor type.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/SensorsApi~getSensorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getSensors",
    value: function getSensors(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
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
      var returnType = _Sensors.Sensors;
      return this.apiClient.callApi('/sensors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensorsOfUser operation.
     * @callback moduleapi/SensorsApi~getSensorsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensors{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sensor listing.
     * Get the Sensor listing.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type The Sensor type.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/SensorsApi~getSensorsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getSensorsOfUser",
    value: function getSensorsOfUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getSensorsOfUser");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'type': opts['type'],
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
      var returnType = _Sensors.Sensors;
      return this.apiClient.callApi('/users/{userId}/sensors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTrackSensor operation.
     * @callback moduleapi/SensorsApi~getTrackSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the sensor of a track.
     * Get the sensor of a track.
     * @param {String} trackId The track id.
     * @param {module:api/SensorsApi~getTrackSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTrackSensor",
    value: function getTrackSensor(trackId, callback) {
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling getTrackSensor");
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
      var returnType = _Sensor.Sensor;
      return this.apiClient.callApi('/tracks/{trackId}/sensor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return SensorsApi;
}();
exports.SensorsApi = SensorsApi;