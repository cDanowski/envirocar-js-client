"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Exception = require("../model/Exception");
var _PrivacyStatement = require("../model/PrivacyStatement");
var _PrivacyStatements = require("../model/PrivacyStatements");
var _TermsOfUse = require("../model/TermsOfUse");
var _TermsOfUseInstance = require("../model/TermsOfUseInstance");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Terms service.
* @module api/TermsApi
* @version 1.0.0
*/
var TermsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TermsApi. 
  * @alias module:api/TermsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function TermsApi(apiClient) {
    _classCallCheck(this, TermsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the getPrivacyStatements operation.
   * @callback moduleapi/TermsApi~getPrivacyStatementsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PrivacyStatements{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of privacy statements.
   * Get the list of privacy statements.
   * @param {module:api/TermsApi~getPrivacyStatementsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(TermsApi, [{
    key: "getPrivacyStatements",
    value: function getPrivacyStatements(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _PrivacyStatements.PrivacyStatements;
      return this.apiClient.callApi('/privacyStatements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPrivacyStatementsById operation.
     * @callback moduleapi/TermsApi~getPrivacyStatementsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivacyStatement{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the privacy statement.
     * Get the privacy statement.
     * @param {String} privacyStatementId The privacy statement id.
     * @param {module:api/TermsApi~getPrivacyStatementsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getPrivacyStatementsById",
    value: function getPrivacyStatementsById(privacyStatementId, callback) {
      var postBody = null;
      // verify the required parameter 'privacyStatementId' is set
      if (privacyStatementId === undefined || privacyStatementId === null) {
        throw new Error("Missing the required parameter 'privacyStatementId' when calling getPrivacyStatementsById");
      }
      var pathParams = {
        'privacyStatementId': privacyStatementId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _PrivacyStatement.PrivacyStatement;
      return this.apiClient.callApi('/privacyStatements/{privacyStatementId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTermsOfUse operation.
     * @callback moduleapi/TermsApi~getTermsOfUseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TermsOfUse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of terms of use.
     * Get the list of terms of use.
     * @param {module:api/TermsApi~getTermsOfUseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTermsOfUse",
    value: function getTermsOfUse(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _TermsOfUse.TermsOfUse;
      return this.apiClient.callApi('/termsOfUse', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getTermsOfUseById operation.
     * @callback moduleapi/TermsApi~getTermsOfUseByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TermsOfUseInstance{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the terms of use.
     * Get the terms of use.
     * @param {String} termsOfUseId The terms of use id.
     * @param {module:api/TermsApi~getTermsOfUseByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "getTermsOfUseById",
    value: function getTermsOfUseById(termsOfUseId, callback) {
      var postBody = null;
      // verify the required parameter 'termsOfUseId' is set
      if (termsOfUseId === undefined || termsOfUseId === null) {
        throw new Error("Missing the required parameter 'termsOfUseId' when calling getTermsOfUseById");
      }
      var pathParams = {
        'termsOfUseId': termsOfUseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/yaml'];
      var returnType = _TermsOfUseInstance.TermsOfUseInstance;
      return this.apiClient.callApi('/termsOfUse/{termsOfUseId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return TermsApi;
}();
exports.TermsApi = TermsApi;