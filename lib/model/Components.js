"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Components = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Components model module.
 * @module model/Components
 * @version 1.0.0
 */
var Components = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Components</code>.
   * @alias module:model/Components
   * @class
   */
  function Components() {
    _classCallCheck(this, Components);
  }

  /**
   * Constructs a <code>Components</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Components} obj Optional instance to populate.
   * @return {module:model/Components} The populated <code>Components</code> instance.
   */
  _createClass(Components, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Components();
        if (data.hasOwnProperty('schemas')) obj.schemas = _ApiClient.ApiClient.convertToType(data['schemas'], Object);
        if (data.hasOwnProperty('responses')) obj.responses = _ApiClient.ApiClient.convertToType(data['responses'], Object);
        if (data.hasOwnProperty('parameters')) obj.parameters = _ApiClient.ApiClient.convertToType(data['parameters'], Object);
        if (data.hasOwnProperty('examples')) obj.examples = _ApiClient.ApiClient.convertToType(data['examples'], Object);
        if (data.hasOwnProperty('requestBodies')) obj.requestBodies = _ApiClient.ApiClient.convertToType(data['requestBodies'], Object);
        if (data.hasOwnProperty('headers')) obj.headers = _ApiClient.ApiClient.convertToType(data['headers'], Object);
        if (data.hasOwnProperty('securitySchemes')) obj.securitySchemes = _ApiClient.ApiClient.convertToType(data['securitySchemes'], Object);
        if (data.hasOwnProperty('links')) obj.links = _ApiClient.ApiClient.convertToType(data['links'], Object);
        if (data.hasOwnProperty('callbacks')) obj.callbacks = _ApiClient.ApiClient.convertToType(data['callbacks'], Object);
      }
      return obj;
    }
  }]);
  return Components;
}();
/**
 * @member {Object} schemas
 */
exports.Components = Components;
Components.prototype.schemas = undefined;

/**
 * @member {Object} responses
 */
Components.prototype.responses = undefined;

/**
 * @member {Object} parameters
 */
Components.prototype.parameters = undefined;

/**
 * @member {Object} examples
 */
Components.prototype.examples = undefined;

/**
 * @member {Object} requestBodies
 */
Components.prototype.requestBodies = undefined;

/**
 * @member {Object} headers
 */
Components.prototype.headers = undefined;

/**
 * @member {Object} securitySchemes
 */
Components.prototype.securitySchemes = undefined;

/**
 * @member {Object} links
 */
Components.prototype.links = undefined;

/**
 * @member {Object} callbacks
 */
Components.prototype.callbacks = undefined;