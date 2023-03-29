"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Activities = require("../model/Activities");
var _Activity = require("../model/Activity");
var _Exception = require("../model/Exception");
var _Group = require("../model/Group");
var _GroupCreate = require("../model/GroupCreate");
var _GroupModify = require("../model/GroupModify");
var _Groups = require("../model/Groups");
var _Range = require("../model/Range");
var _User = require("../model/User");
var _UserRef = require("../model/UserRef");
var _Users = require("../model/Users");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Groups service.
* @module api/GroupsApi
* @version 1.0.0
*/
var GroupsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GroupsApi. 
  * @alias module:api/GroupsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function GroupsApi(apiClient) {
    _classCallCheck(this, GroupsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the addGroupMember operation.
   * @callback moduleapi/GroupsApi~addGroupMemberCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add the group member.
   * Add the group member.
   * @param {module:model/UserRef} body The user reference.
   * @param {String} groupId The group id.
   * @param {module:api/GroupsApi~addGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(GroupsApi, [{
    key: "addGroupMember",
    value: function addGroupMember(body, groupId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addGroupMember");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addGroupMember");
      }
      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{groupId}/members', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback moduleapi/GroupsApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the group.
     * Create the group.
     * @param {module:model/GroupCreate} body The group to create.
     * @param {module:api/GroupsApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "createGroup",
    value: function createGroup(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGroup");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the createUserGroup operation.
     * @callback moduleapi/GroupsApi~createUserGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the user group.
     * Create the user group.
     * @param {module:model/GroupCreate} body The group to create.
     * @param {String} userId The user id.
     * @param {module:api/GroupsApi~createUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteGroup operation.
     * @callback moduleapi/GroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the group.
     * Delete the group.
     * @param {String} groupId The group id.
     * @param {module:api/GroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteGroup",
    value: function deleteGroup(groupId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }
      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{groupId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserGroup operation.
     * @callback moduleapi/GroupsApi~deleteUserGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the group.
     * Delete the group.
     * @param {String} userId The user id.
     * @param {String} groupId The group id.
     * @param {module:api/GroupsApi~deleteUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getGroup operation.
     * @callback moduleapi/GroupsApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the group.
     * Get the group
     * @param {String} groupId The group id.
     * @param {module:api/GroupsApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroup",
    value: function getGroup(groupId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroup");
      }
      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Group.Group;
      return this.apiClient.callApi('/groups/{groupId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getGroupActivities operation.
     * @callback moduleapi/GroupsApi~getGroupActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activities{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activities of the group.
     * Get the activities of the group.
     * @param {String} groupId The group id.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The activity type.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/GroupsApi~getGroupActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroupActivities",
    value: function getGroupActivities(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupActivities");
      }
      var pathParams = {
        'groupId': groupId
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
      return this.apiClient.callApi('/groups/{groupId}/activities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getGroupActivityById operation.
     * @callback moduleapi/GroupsApi~getGroupActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Activity{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the activity of the group.
     * Get the activity of the group.
     * @param {String} groupId The group id.
     * @param {String} activityId The activity id.
     * @param {module:api/GroupsApi~getGroupActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroupActivityById",
    value: function getGroupActivityById(groupId, activityId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupActivityById");
      }
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling getGroupActivityById");
      }
      var pathParams = {
        'groupId': groupId,
        'activityId': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _Activity.Activity;
      return this.apiClient.callApi('/groups/{groupId}/activities/{activityId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getGroupMember operation.
     * @callback moduleapi/GroupsApi~getGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the group member.
     * Get the group member.
     * @param {String} groupId The group id.
     * @param {String} memberId The member id.
     * @param {module:api/GroupsApi~getGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroupMember",
    value: function getGroupMember(groupId, memberId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupMember");
      }
      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling getGroupMember");
      }
      var pathParams = {
        'groupId': groupId,
        'memberId': memberId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _User.User;
      return this.apiClient.callApi('/groups/{groupId}/members/{memberId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getGroupMembers operation.
     * @callback moduleapi/GroupsApi~getGroupMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the group members.
     * Get the group members.
     * @param {String} groupId The group id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/GroupsApi~getGroupMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroupMembers",
    value: function getGroupMembers(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupMembers");
      }
      var pathParams = {
        'groupId': groupId
      };
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
      return this.apiClient.callApi('/groups/{groupId}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback moduleapi/GroupsApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Groups{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the groups.
     * Get the groups.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The term to search for.
     * @param {Number} opts.limit The number of entities per page. (default to <.>)
     * @param {Number} opts.page The page of entities to request. (default to <.>)
     * @param {module:model/Range} opts.range The range of entities to request.
     * @param {module:api/GroupsApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getGroups",
    value: function getGroups(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      return this.apiClient.callApi('/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserGroup operation.
     * @callback moduleapi/GroupsApi~getUserGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the group of the user.
     * Get the group of the user
     * @param {String} userId The user id.
     * @param {String} groupId The group id.
     * @param {module:api/GroupsApi~getUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback moduleapi/GroupsApi~getUserGroupsCallback
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
     * @param {module:api/GroupsApi~getUserGroupsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the modifyGroup operation.
     * @callback moduleapi/GroupsApi~modifyGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify the group.
     * Modify the group.
     * @param {module:model/GroupModify} body The group modifications.
     * @param {String} groupId The group id.
     * @param {module:api/GroupsApi~modifyGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "modifyGroup",
    value: function modifyGroup(body, groupId, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyGroup");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling modifyGroup");
      }
      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{groupId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the modifyUserGroup operation.
     * @callback moduleapi/GroupsApi~modifyUserGroupCallback
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
     * @param {module:api/GroupsApi~modifyUserGroupCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the removeGroupMember operation.
     * @callback moduleapi/GroupsApi~removeGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove the user from the group.
     * Remove the user from the group.
     * @param {String} groupId The group id.
     * @param {String} memberId The member id.
     * @param {module:api/GroupsApi~removeGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "removeGroupMember",
    value: function removeGroupMember(groupId, memberId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeGroupMember");
      }
      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling removeGroupMember");
      }
      var pathParams = {
        'groupId': groupId,
        'memberId': memberId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{groupId}/members/{memberId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return GroupsApi;
}();
exports.GroupsApi = GroupsApi;