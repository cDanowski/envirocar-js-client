"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;
var _ApiClient = require("../ApiClient");
var _ExternalDocumentation = require("./ExternalDocumentation");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Tag model module.
 * @module model/Tag
 * @version 1.0.0
 */
var Tag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   * @param name {String} 
   */
  function Tag(name) {
    _classCallCheck(this, Tag);
    this.name = name;
  }

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  _createClass(Tag, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tag();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('externalDocs')) obj.externalDocs = _ExternalDocumentation.ExternalDocumentation.constructFromObject(data['externalDocs']);
      }
      return obj;
    }
  }]);
  return Tag;
}();
/**
 * @member {String} name
 */
exports.Tag = Tag;
Tag.prototype.name = undefined;

/**
 * @member {String} description
 */
Tag.prototype.description = undefined;

/**
 * @member {module:model/ExternalDocumentation} externalDocs
 */
Tag.prototype.externalDocs = undefined;