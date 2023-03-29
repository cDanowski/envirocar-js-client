"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TracksApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _MeasurementCreate = require("../model/MeasurementCreate");
var _Measurements = require("../model/Measurements");
var _Range = require("../model/Range");
var _Sensor = require("../model/Sensor");
var _Statistics = require("../model/Statistics");
var _TemporalFilter = require("../model/TemporalFilter");
var _Track = require("../model/Track");
var _TrackCreate = require("../model/TrackCreate");
var _TrackModify = require("../model/TrackModify");
var _TrackStatus = require("../model/TrackStatus");
var _Tracks = require("../model/Tracks");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Tracks service.
* @module api/TracksApi
* @version 1.0.0
*/
var TracksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TracksApi. 
  * @alias module:api/TracksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function TracksApi(apiClient) {
    _classCallCheck(this, TracksApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the addTrackMeasurement operation.
   * @callback moduleapi/TracksApi~addTrackMeasurementCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a measurement to a track.
   * Add a measurement to a track.
   * @param {module:model/MeasurementCreate} body The measurement to create.
   * @param {String} trackId The track id.
   * @param {module:api/TracksApi~addTrackMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TracksApi, [{
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
     * Callback function to receive the result of the createTrack operation.
     * @callback moduleapi/TracksApi~createTrackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new track.
     * Create a new track.
     * @param {module:model/TrackCreate} body The track to create.
     * @param {module:api/TracksApi~createTrackCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createTrack",
    value: function createTrack(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTrack");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tracks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createTrackForUser operation.
     * @callback moduleapi/TracksApi~createTrackForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new track.
     * Create a new track.
     * @param {module:model/TrackCreate} body The track to create.
     * @param {String} userId The user id.
     * @param {module:api/TracksApi~createTrackForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createTrackForUser",
    value: function createTrackForUser(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTrackForUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createTrackForUser");
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
      return this.apiClient.callApi('/users/{userId}/tracks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteTrack operation.
     * @callback moduleapi/TracksApi~deleteTrackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the specified track.
     * Delete the specified track.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~deleteTrackCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteTrack",
    value: function deleteTrack(trackId, callback) {
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling deleteTrack");
      }
      var pathParams = {
        'trackId': trackId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tracks/{trackId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTrackById operation.
     * @callback moduleapi/TracksApi~getTrackByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Track{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the specified track.
     * Get the specified track.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~getTrackByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTrackById",
    value: function getTrackById(trackId, callback) {
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling getTrackById");
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
      var returnType = _Track.Track;
      return this.apiClient.callApi('/tracks/{trackId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTrackMeasurements operation.
     * @callback moduleapi/TracksApi~getTrackMeasurementsCallback
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
     * @param {module:api/TracksApi~getTrackMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the getTrackSensor operation.
     * @callback moduleapi/TracksApi~getTrackSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sensor{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the sensor of a track.
     * Get the sensor of a track.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~getTrackSensorCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the getTrackStatistics operation.
     * @callback moduleapi/TracksApi~getTrackStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the statistics of a track.
     * Get the statistics of a track.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~getTrackStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getTracks operation.
     * @callback moduleapi/TracksApi~getTracksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tracks{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of tracks.
     * Get the list of tracks.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.bbox The bounding box the requested tracks have to intersect with.
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
     * @param {module:model/TrackStatus} opts.status 
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/TracksApi~getTracksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTracks",
    value: function getTracks(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'bbox': this.apiClient.buildCollectionParam(opts['bbox'], 'csv'),
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
        'status': opts['status'],
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
      var returnType = _Tracks.Tracks;
      return this.apiClient.callApi('/tracks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTracksOfUser operation.
     * @callback moduleapi/TracksApi~getTracksOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tracks{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of tracks.
     * Get the list of tracks.
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
     * @param {module:model/TrackStatus} opts.status 
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/TracksApi~getTracksOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTracksOfUser",
    value: function getTracksOfUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getTracksOfUser");
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
        'status': opts['status'],
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
      var returnType = _Tracks.Tracks;
      return this.apiClient.callApi('/users/{userId}/tracks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the modifyTrack operation.
     * @callback moduleapi/TracksApi~modifyTrackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the specified track.
     * Update the specified track.
     * @param {module:model/TrackModify} body The track modifications.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~modifyTrackCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "modifyTrack",
    value: function modifyTrack(body, trackId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyTrack");
      }
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling modifyTrack");
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
      return this.apiClient.callApi('/tracks/{trackId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the previewTrack operation.
     * @callback moduleapi/TracksApi~previewTrackCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the preview image of the track.
     * Get the preview image of the track.
     * @param {String} trackId The track id.
     * @param {module:api/TracksApi~previewTrackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "previewTrack",
    value: function previewTrack(trackId, callback) {
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling previewTrack");
      }
      var pathParams = {
        'trackId': trackId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png', 'application/json'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/tracks/{trackId}/preview', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the shareTrack operation.
     * @callback moduleapi/TracksApi~shareTrackCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the share link of the track.
     * Get the share link of the track.
     * @param {String} trackId The track id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @param {module:api/TracksApi~shareTrackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "shareTrack",
    value: function shareTrack(trackId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling shareTrack");
      }
      var pathParams = {
        'trackId': trackId
      };
      var queryParams = {
        'locale': opts['locale']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png', 'application/json'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/tracks/{trackId}/share', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return TracksApi;
}();
exports.TracksApi = TracksApi;