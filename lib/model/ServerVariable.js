"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerVariable = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ServerVariable model module.
 * @module model/ServerVariable
 * @version 1.0.0
 */
var ServerVariable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServerVariable</code>.
   * @alias module:model/ServerVariable
   * @class
   * @param _default {String} 
   */
  function ServerVariable(_default) {
    _classCallCheck(this, ServerVariable);
    this._default = _default;
  }

  /**
   * Constructs a <code>ServerVariable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerVariable} obj Optional instance to populate.
   * @return {module:model/ServerVariable} The populated <code>ServerVariable</code> instance.
   */
  _createClass(ServerVariable, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServerVariable();
        if (data.hasOwnProperty('enum')) obj._enum = _ApiClient.ApiClient.convertToType(data['enum'], ['String']);
        if (data.hasOwnProperty('default')) obj._default = _ApiClient.ApiClient.convertToType(data['default'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
      }
      return obj;
    }
  }]);
  return ServerVariable;
}();
/**
 * @member {Array.<String>} _enum
 */
exports.ServerVariable = ServerVariable;
ServerVariable.prototype._enum = undefined;

/**
 * @member {String} _default
 */
ServerVariable.prototype._default = undefined;

/**
 * @member {String} description
 */
ServerVariable.prototype.description = undefined;