"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;
var _ApiClient = require("../ApiClient");
var _ServerVariable = require("./ServerVariable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Server model module.
 * @module model/Server
 * @version 1.0.0
 */
var Server = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Server</code>.
   * @alias module:model/Server
   * @class
   * @param url {String} 
   */
  function Server(url) {
    _classCallCheck(this, Server);
    this.url = url;
  }

  /**
   * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Server} obj Optional instance to populate.
   * @return {module:model/Server} The populated <code>Server</code> instance.
   */
  _createClass(Server, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Server();
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('variables')) obj.variables = _ApiClient.ApiClient.convertToType(data['variables'], {
          'String': _ServerVariable.ServerVariable
        });
      }
      return obj;
    }
  }]);
  return Server;
}();
/**
 * @member {String} url
 */
exports.Server = Server;
Server.prototype.url = undefined;

/**
 * @member {String} description
 */
Server.prototype.description = undefined;

/**
 * @member {Object.<String, module:model/ServerVariable>} variables
 */
Server.prototype.variables = undefined;