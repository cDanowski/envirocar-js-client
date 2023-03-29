"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model20210928 = void 0;
var _ApiClient = require("../ApiClient");
var _Components = require("./Components");
var _ExternalDocumentation = require("./ExternalDocumentation");
var _Info = require("./Info");
var _Paths = require("./Paths");
var _SecurityRequirement = require("./SecurityRequirement");
var _Server = require("./Server");
var _Tag = require("./Tag");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Model20210928 model module.
 * @module model/Model20210928
 * @version 1.0.0
 */
var Model20210928 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model20210928</code>.
   * The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3
   * @alias module:model/Model20210928
   * @class
   * @param openapi {String} 
   * @param info {module:model/Info} 
   * @param paths {module:model/Paths} 
   */
  function Model20210928(openapi, info, paths) {
    _classCallCheck(this, Model20210928);
    this.openapi = openapi;
    this.info = info;
    this.paths = paths;
  }

  /**
   * Constructs a <code>Model20210928</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model20210928} obj Optional instance to populate.
   * @return {module:model/Model20210928} The populated <code>Model20210928</code> instance.
   */
  _createClass(Model20210928, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model20210928();
        if (data.hasOwnProperty('openapi')) obj.openapi = _ApiClient.ApiClient.convertToType(data['openapi'], 'String');
        if (data.hasOwnProperty('info')) obj.info = _Info.Info.constructFromObject(data['info']);
        if (data.hasOwnProperty('externalDocs')) obj.externalDocs = _ExternalDocumentation.ExternalDocumentation.constructFromObject(data['externalDocs']);
        if (data.hasOwnProperty('servers')) obj.servers = _ApiClient.ApiClient.convertToType(data['servers'], [_Server.Server]);
        if (data.hasOwnProperty('security')) obj.security = _ApiClient.ApiClient.convertToType(data['security'], [_SecurityRequirement.SecurityRequirement]);
        if (data.hasOwnProperty('tags')) obj.tags = _ApiClient.ApiClient.convertToType(data['tags'], [_Tag.Tag]);
        if (data.hasOwnProperty('paths')) obj.paths = _Paths.Paths.constructFromObject(data['paths']);
        if (data.hasOwnProperty('components')) obj.components = _Components.Components.constructFromObject(data['components']);
      }
      return obj;
    }
  }]);
  return Model20210928;
}();
/**
 * @member {String} openapi
 */
exports.Model20210928 = Model20210928;
Model20210928.prototype.openapi = undefined;

/**
 * @member {module:model/Info} info
 */
Model20210928.prototype.info = undefined;

/**
 * @member {module:model/ExternalDocumentation} externalDocs
 */
Model20210928.prototype.externalDocs = undefined;

/**
 * @member {Array.<module:model/Server>} servers
 */
Model20210928.prototype.servers = undefined;

/**
 * @member {Array.<module:model/SecurityRequirement>} security
 */
Model20210928.prototype.security = undefined;

/**
 * @member {Array.<module:model/Tag>} tags
 */
Model20210928.prototype.tags = undefined;

/**
 * @member {module:model/Paths} paths
 */
Model20210928.prototype.paths = undefined;

/**
 * @member {module:model/Components} components
 */
Model20210928.prototype.components = undefined;