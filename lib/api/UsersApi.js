"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersApi = void 0;
var _ApiClient = require("../ApiClient");
var _Activities = require("../model/Activities");
var _Activity = require("../model/Activity");
var _Exception = require("../model/Exception");
var _Fueling = require("../model/Fueling");
var _FuelingCreate = require("../model/FuelingCreate");
var _Fuelings = require("../model/Fuelings");
var _Group = require("../model/Group");
var _GroupCreate = require("../model/GroupCreate");
var _GroupModify = require("../model/GroupModify");
var _Groups = require("../model/Groups");
var _Range = require("../model/Range");
var _SensorCreate = require("../model/SensorCreate");
var _Sensors = require("../model/Sensors");
var _Statistics = require("../model/Statistics");
var _TemporalFilter = require("../model/TemporalFilter");
var _TrackCreate = require("../model/TrackCreate");
var _TrackStatus = require("../model/TrackStatus");
var _Tracks = require("../model/Tracks");
var _User = require("../model/User");
var _UserModify = require("../model/UserModify");
var _UserRef = require("../model/UserRef");
var _UserStatistic = require("../model/UserStatistic");
var _Users = require("../model/Users");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the addFriend operation.
   * @callback moduleapi/UsersApi~addFriendCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a friend.
   * Add a friend.
   * @param {module:model/UserRef} body The user reference.
   * @param {String} userId The user id.
   * @param {module:api/UsersApi~addFriendCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(UsersApi, [{
    key: "addFriend",
    value: function addFriend(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addFriend");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addFriend");
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
      return this.apiClient.callApi('/users/{userId}/friends', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createFueling operation.
     * @callback moduleapi/UsersApi~createFuelingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new fueling for the user.
     * Create a new fueling for the user.
     * @param {module:model/FuelingCreate} body The fueling to create.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~createFuelingCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
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
     * Callback function to receive the result of the createSensorForUser operation.
     * @callback moduleapi/UsersApi~createSensorForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Sensor.
     * Create a new Sensor.
     * @param {module:model/SensorCreate} body The sensor to create.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~createSensorForUserCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the createTrackForUser operation.
     * @callback moduleapi/UsersApi~createTrackForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new track.
     * Create a new track.
     * @param {module:model/TrackCreate} body The track to create.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~createTrackForUserCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the createUser operation.
     * @callback moduleapi/UsersApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user.
     * Create a new user.
     * @param {module:model/SensorCreate} body The sensor to create.
     * @param {module:api/UsersApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createUser",
    value: function createUser(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUser");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createUserGroup operation.
     * @callback moduleapi/UsersApi~createUserGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the user group.
     * Create the user group.
     * @param {module:model/GroupCreate} body The group to create.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~createUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createUserGroup",
    value: function createUserGroup(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUserGroup");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserGroup");
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
      return this.apiClient.callApi('/users/{userId}/groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the declineRequest operation.
     * @callback moduleapi/UsersApi~declineRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decline friend request.
     * Decline friend request.
     * @param {module:model/UserRef} body The user reference.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~declineRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "declineRequest",
    value: function declineRequest(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling declineRequest");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling declineRequest");
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
      return this.apiClient.callApi('/users/{userId}/friends/declineRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteFriend operation.
     * @callback moduleapi/UsersApi~deleteFriendCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the friend.
     * Delete the friend.
     * @param {String} userId The user id.
     * @param {String} friendId The friend id.
     * @param {module:api/UsersApi~deleteFriendCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFriend",
    value: function deleteFriend(userId, friendId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteFriend");
      }
      // verify the required parameter 'friendId' is set
      if (friendId === undefined || friendId === null) {
        throw new Error("Missing the required parameter 'friendId' when calling deleteFriend");
      }
      var pathParams = {
        'userId': userId,
        'friendId': friendId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}/friends/{friendId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteFueling operation.
     * @callback moduleapi/UsersApi~deleteFuelingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the fueling for the user.
     * Delete the fueling for the user.
     * @param {String} userId The user id.
     * @param {String} fuelingId The fueling id.
     * @param {module:api/UsersApi~deleteFuelingCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteUser operation.
     * @callback moduleapi/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the user.
     * Delete the user.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteContent If the user created tracks and measurements also should be deleted. (default to <.>)
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteUser",
    value: function deleteUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'deleteContent': opts['deleteContent']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserGroup operation.
     * @callback moduleapi/UsersApi~deleteUserGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the group.
     * Delete the group.
     * @param {String} userId The user id.
     * @param {String} groupId The group id.
     * @param {module:api/UsersApi~deleteUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteUserGroup",
    value: function deleteUserGroup(userId, groupId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserGroup");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteUserGroup");
      }
      var pathParams = {
        'userId': userId,
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}/groups/{groupId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getAvatar operation.
     * @callback moduleapi/UsersApi~getAvatarCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the avatar of the user.
     * Get the avatar of the user.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getAvatarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getAvatar",
    value: function getAvatar(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAvatar");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['image/jpeg', 'application/json'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/users/{userId}/avatar', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFriend operation.
     * @callback moduleapi/UsersApi~getFriendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the friend.
     * Get the friend.
     * @param {String} userId The user id.
     * @param {String} friendId The friend id.
     * @param {module:api/UsersApi~getFriendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFriend",
    value: function getFriend(userId, friendId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriend");
      }
      // verify the required parameter 'friendId' is set
      if (friendId === undefined || friendId === null) {
        throw new Error("Missing the required parameter 'friendId' when calling getFriend");
      }
      var pathParams = {
        'userId': userId,
        'friendId': friendId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _User.User;
      return this.apiClient.callApi('/users/{userId}/friends/{friendId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFriendActivities operation.
     * @callback moduleapi/UsersApi~getFriendActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activities{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activities of the friend.
     * Get the activities of the friend.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The activity type.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/UsersApi~getFriendActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFriendActivities",
    value: function getFriendActivities(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriendActivities");
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
      var returnType = _Activities.Activities;
      return this.apiClient.callApi('/users/{userId}/friendActivities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFriendActivityById operation.
     * @callback moduleapi/UsersApi~getFriendActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activity{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activity of the friend.
     * Get the activity of the friend.
     * @param {String} userId The user id.
     * @param {String} activityId The activity id.
     * @param {module:api/UsersApi~getFriendActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFriendActivityById",
    value: function getFriendActivityById(userId, activityId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriendActivityById");
      }
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling getFriendActivityById");
      }
      var pathParams = {
        'userId': userId,
        'activityId': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Activity.Activity;
      return this.apiClient.callApi('/users/{userId}/friendActivities/{activityId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFriends operation.
     * @callback moduleapi/UsersApi~getFriendsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the friends.
     * Get the friends.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getFriendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getFriends",
    value: function getFriends(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriends");
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
      var returnType = _Users.Users;
      return this.apiClient.callApi('/users/{userId}/friends', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFueling operation.
     * @callback moduleapi/UsersApi~getFuelingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Fueling{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the fueling for the user.
     * Get the fueling for the user.
     * @param {String} userId The user id.
     * @param {String} fuelingId The fueling id.
     * @param {module:api/UsersApi~getFuelingCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback moduleapi/UsersApi~getFuelingsCallback
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
     * @param {module:api/UsersApi~getFuelingsCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the getIncomingFriendRequests operation.
     * @callback moduleapi/UsersApi~getIncomingFriendRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get incoming friend requests.
     * Get incoming friend requests.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getIncomingFriendRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getIncomingFriendRequests",
    value: function getIncomingFriendRequests(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getIncomingFriendRequests");
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
      var returnType = _Users.Users;
      return this.apiClient.callApi('/users/{userId}/friends/incomingRequests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getOutgoingFriendRequests operation.
     * @callback moduleapi/UsersApi~getOutgoingFriendRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get outgoing friend requests.
     * Get outgoing friend requests.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getOutgoingFriendRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getOutgoingFriendRequests",
    value: function getOutgoingFriendRequests(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getOutgoingFriendRequests");
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
      var returnType = _Users.Users;
      return this.apiClient.callApi('/users/{userId}/friends/outgoingRequests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensorsOfUser operation.
     * @callback moduleapi/UsersApi~getSensorsOfUserCallback
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
     * @param {module:api/UsersApi~getSensorsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getStatisticsOfUser operation.
     * @callback moduleapi/UsersApi~getStatisticsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Statistics{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user statistics.
     * Get the user statistics.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getStatisticsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getTracksOfUser operation.
     * @callback moduleapi/UsersApi~getTracksOfUserCallback
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
     * @param {module:api/UsersApi~getTracksOfUserCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getUserActivities operation.
     * @callback moduleapi/UsersApi~getUserActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activities{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activities of the user.
     * Get the activities of the user.
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The activity type.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/UsersApi~getUserActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserActivities",
    value: function getUserActivities(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserActivities");
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
      var returnType = _Activities.Activities;
      return this.apiClient.callApi('/users/{userId}/activities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserActivityById operation.
     * @callback moduleapi/UsersApi~getUserActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activity{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activity of the user.
     * Get the activity of the user.
     * @param {String} userId The user id.
     * @param {String} activityId The activity id.
     * @param {module:api/UsersApi~getUserActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserActivityById",
    value: function getUserActivityById(userId, activityId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserActivityById");
      }
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling getUserActivityById");
      }
      var pathParams = {
        'userId': userId,
        'activityId': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Activity.Activity;
      return this.apiClient.callApi('/users/{userId}/activities/{activityId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback moduleapi/UsersApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user.
     * Get the user.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserById",
    value: function getUserById(userId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserById");
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
      var returnType = _User.User;
      return this.apiClient.callApi('/users/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserGroup operation.
     * @callback moduleapi/UsersApi~getUserGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the group of the user.
     * Get the group of the user
     * @param {String} userId The user id.
     * @param {String} groupId The group id.
     * @param {module:api/UsersApi~getUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserGroup",
    value: function getUserGroup(userId, groupId, callback) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserGroup");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getUserGroup");
      }
      var pathParams = {
        'userId': userId,
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Group.Group;
      return this.apiClient.callApi('/users/{userId}/groups/{groupId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserGroups operation.
     * @callback moduleapi/UsersApi~getUserGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Groups{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the groups of the user.
     * Get the groups of the user
     * @param {String} userId The user id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The term to search for.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/UsersApi~getUserGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUserGroups",
    value: function getUserGroups(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserGroups");
      }
      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'q': opts['q'],
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
      var returnType = _Groups.Groups;
      return this.apiClient.callApi('/users/{userId}/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserStatistics operation.
     * @callback moduleapi/UsersApi~getUserStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserStatistic{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user statistics.
     * Get the user statistics.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~getUserStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback moduleapi/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the users.
     * Get the users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getUsers",
    value: function getUsers(opts, callback) {
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
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Users.Users;
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the modifyUser operation.
     * @callback moduleapi/UsersApi~modifyUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the user.
     * Change the user.
     * @param {module:model/UserModify} body The user modifications.
     * @param {String} userId The user id.
     * @param {module:api/UsersApi~modifyUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "modifyUser",
    value: function modifyUser(body, userId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling modifyUser");
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
      return this.apiClient.callApi('/users/{userId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the modifyUserGroup operation.
     * @callback moduleapi/UsersApi~modifyUserGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify the group.
     * Modify the group.
     * @param {module:model/GroupModify} body The group modifications.
     * @param {String} userId The user id.
     * @param {String} groupId The group id.
     * @param {module:api/UsersApi~modifyUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "modifyUserGroup",
    value: function modifyUserGroup(body, userId, groupId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyUserGroup");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling modifyUserGroup");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling modifyUserGroup");
      }
      var pathParams = {
        'userId': userId,
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{userId}/groups/{groupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return UsersApi;
}();
exports.UsersApi = UsersApi;