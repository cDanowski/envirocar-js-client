"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasurementsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _Measurement = require("../model/Measurement");
var _MeasurementCreate = require("../model/MeasurementCreate");
var _Measurements = require("../model/Measurements");
var _Range = require("../model/Range");
var _Sensor = require("../model/Sensor");
var _TemporalFilter = require("../model/TemporalFilter");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Measurements service.
* @module api/MeasurementsApi
* @version 1.0.0
*/
var MeasurementsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MeasurementsApi. 
  * @alias module:api/MeasurementsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function MeasurementsApi(apiClient) {
    _classCallCheck(this, MeasurementsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the addTrackMeasurement operation.
   * @callback moduleapi/MeasurementsApi~addTrackMeasurementCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a measurement to a track.
   * Add a measurement to a track.
   * @param {module:model/MeasurementCreate} body The measurement to create.
   * @param {String} trackId The track id.
   * @param {module:api/MeasurementsApi~addTrackMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(MeasurementsApi, [{
    key: "addTrackMeasurement",
    value: function addTrackMeasurement(body, trackId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTrackMeasurement");
      }
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling addTrackMeasurement");
      }
      var pathParams = {
        'trackId': trackId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tracks/{trackId}/measurements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createMeasurement operation.
     * @callback moduleapi/MeasurementsApi~createMeasurementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new measurement.
     * Create a new measurement.
     * @param {module:model/MeasurementCreate} body The measurement to create.
     * @param {module:api/MeasurementsApi~createMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createMeasurement",
    value: function createMeasurement(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMeasurement");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/measurements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createMeasurementForUser operation.
     * @callback moduleapi/MeasurementsApi~createMeasurementForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new measurement.
     * Create a new measurement.
     * @param {module:model/MeasurementCreate} body The measurement to create.
     * @param {String} userId The user id.
     * @param {module:api/MeasurementsApi~createMeasurementForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createMeasurementForUser",
    value: function createMeasurementForUser(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMeasurementForUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createMeasurementForUser");
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
      return this.apiClient.callApi('/users/{userId}/measurements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteMeasurement operation.
     * @callback moduleapi/MeasurementsApi~deleteMeasurementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a existing measurement.
     * Delete a existing measurement.
     * @param {String} measurementId The measurement id.
     * @param {module:api/MeasurementsApi~deleteMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteMeasurement",
    value: function deleteMeasurement(measurementId, callback) {
      var postBody = null;
      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling deleteMeasurement");
      }
      var pathParams = {
        'measurementId': measurementId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/measurements/{measurementId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getMeasurementById operation.
     * @callback moduleapi/MeasurementsApi~getMeasurementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Measurement{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the specified measurement.
     * Get the specified measurement.
     * @param {String} measurementId The measurement id.
     * @param {module:api/MeasurementsApi~getMeasurementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getMeasurementById",
    value: function getMeasurementById(measurementId, callback) {
      var postBody = null;
      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling getMeasurementById");
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
      var returnType = _Measurement.Measurement;
      return this.apiClient.callApi('/measurements/{measurementId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getMeasurementSensor operation.
     * @callback moduleapi/MeasurementsApi~getMeasurementSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the sensor of a measurement.
     * Get the sensor of a measurement.
     * @param {String} measurementId The measurement id.
     * @param {module:api/MeasurementsApi~getMeasurementSensorCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getMeasurements operation.
     * @callback moduleapi/MeasurementsApi~getMeasurementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Measurements{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of measurements.
     * Get the list of measurements.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.bbox The bounding box the requested tracks have to intersect with.
     * @param {Array.<Number>} opts.nearPoint The point to which the distance can not fall below a certain threshold.
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
     * @param {module:api/MeasurementsApi~getMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getMeasurements",
    value: function getMeasurements(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'bbox': this.apiClient.buildCollectionParam(opts['bbox'], 'csv'),
        'nearPoint': this.apiClient.buildCollectionParam(opts['nearPoint'], 'csv'),
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
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Measurements.Measurements;
      return this.apiClient.callApi('/measurements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getMeasurementsOfUser operation.
     * @callback moduleapi/MeasurementsApi~getMeasurementsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Measurements{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of measurements.
     * Get the list of measurements.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.bbox The bounding box the requested tracks have to intersect with.
     * @param {Array.<Number>} opts.nearPoint The point to which the distance can not fall below a certain threshold.
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
     * @param {module:api/MeasurementsApi~getMeasurementsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getMeasurementsOfUser",
    value: function getMeasurementsOfUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getMeasurementsOfUser");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'bbox': this.apiClient.buildCollectionParam(opts['bbox'], 'csv'),
        'nearPoint': this.apiClient.buildCollectionParam(opts['nearPoint'], 'csv'),
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
      var returnType = _Measurements.Measurements;
      return this.apiClient.callApi('/users/{userId}/measurements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTrackMeasurements operation.
     * @callback moduleapi/MeasurementsApi~getTrackMeasurementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Measurements{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the measurements of a track.
     * Get the measurements of a track.
     * @param {String} trackId The track id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/MeasurementsApi~getTrackMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTrackMeasurements",
    value: function getTrackMeasurements(trackId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling getTrackMeasurements");
      }
      var pathParams = {
        'trackId': trackId
      };
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
      var returnType = _Measurements.Measurements;
      return this.apiClient.callApi('/tracks/{trackId}/measurements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return MeasurementsApi;
}();
exports.MeasurementsApi = MeasurementsApi;