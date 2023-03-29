"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schema = void 0;
var _ApiClient = require("../ApiClient");
var _Discriminator = require("./Discriminator");
var _ExternalDocumentation = require("./ExternalDocumentation");
var _XML = require("./XML");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Schema model module.
 * @module model/Schema
 * @version 1.0.0
 */
var Schema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Schema</code>.
   * @alias module:model/Schema
   * @class
   */
  function Schema() {
    _classCallCheck(this, Schema);
  }

  /**
   * Constructs a <code>Schema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Schema} obj Optional instance to populate.
   * @return {module:model/Schema} The populated <code>Schema</code> instance.
   */
  _createClass(Schema, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Schema();
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('multipleOf')) obj.multipleOf = _ApiClient.ApiClient.convertToType(data['multipleOf'], 'Number');
        if (data.hasOwnProperty('maximum')) obj.maximum = _ApiClient.ApiClient.convertToType(data['maximum'], 'Number');
        if (data.hasOwnProperty('exclusiveMaximum')) obj.exclusiveMaximum = _ApiClient.ApiClient.convertToType(data['exclusiveMaximum'], 'Boolean');
        if (data.hasOwnProperty('minimum')) obj.minimum = _ApiClient.ApiClient.convertToType(data['minimum'], 'Number');
        if (data.hasOwnProperty('exclusiveMinimum')) obj.exclusiveMinimum = _ApiClient.ApiClient.convertToType(data['exclusiveMinimum'], 'Boolean');
        if (data.hasOwnProperty('maxLength')) obj.maxLength = _ApiClient.ApiClient.convertToType(data['maxLength'], 'Number');
        if (data.hasOwnProperty('minLength')) obj.minLength = _ApiClient.ApiClient.convertToType(data['minLength'], 'Number');
        if (data.hasOwnProperty('pattern')) obj.pattern = _ApiClient.ApiClient.convertToType(data['pattern'], 'String');
        if (data.hasOwnProperty('maxItems')) obj.maxItems = _ApiClient.ApiClient.convertToType(data['maxItems'], 'Number');
        if (data.hasOwnProperty('minItems')) obj.minItems = _ApiClient.ApiClient.convertToType(data['minItems'], 'Number');
        if (data.hasOwnProperty('uniqueItems')) obj.uniqueItems = _ApiClient.ApiClient.convertToType(data['uniqueItems'], 'Boolean');
        if (data.hasOwnProperty('maxProperties')) obj.maxProperties = _ApiClient.ApiClient.convertToType(data['maxProperties'], 'Number');
        if (data.hasOwnProperty('minProperties')) obj.minProperties = _ApiClient.ApiClient.convertToType(data['minProperties'], 'Number');
        if (data.hasOwnProperty('required')) obj.required = _ApiClient.ApiClient.convertToType(data['required'], ['String']);
        if (data.hasOwnProperty('enum')) obj._enum = _ApiClient.ApiClient.convertToType(data['enum'], [Object]);
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('not')) obj.not = _ApiClient.ApiClient.convertToType(data['not'], Object);
        if (data.hasOwnProperty('allOf')) obj.allOf = _ApiClient.ApiClient.convertToType(data['allOf'], [OneOfSchemaAllOfItems]);
        if (data.hasOwnProperty('oneOf')) obj.oneOf = _ApiClient.ApiClient.convertToType(data['oneOf'], [OneOfSchemaOneOfItems]);
        if (data.hasOwnProperty('anyOf')) obj.anyOf = _ApiClient.ApiClient.convertToType(data['anyOf'], [OneOfSchemaAnyOfItems]);
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], Object);
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], {
          'String': Object
        });
        if (data.hasOwnProperty('additionalProperties')) obj.additionalProperties = _ApiClient.ApiClient.convertToType(data['additionalProperties'], Object);
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('format')) obj.format = _ApiClient.ApiClient.convertToType(data['format'], 'String');
        if (data.hasOwnProperty('default')) obj._default = _ApiClient.ApiClient.convertToType(data['default'], Object);
        if (data.hasOwnProperty('nullable')) obj.nullable = _ApiClient.ApiClient.convertToType(data['nullable'], 'Boolean');
        if (data.hasOwnProperty('discriminator')) obj.discriminator = _Discriminator.Discriminator.constructFromObject(data['discriminator']);
        if (data.hasOwnProperty('readOnly')) obj.readOnly = _ApiClient.ApiClient.convertToType(data['readOnly'], 'Boolean');
        if (data.hasOwnProperty('writeOnly')) obj.writeOnly = _ApiClient.ApiClient.convertToType(data['writeOnly'], 'Boolean');
        if (data.hasOwnProperty('example')) obj.example = _ApiClient.ApiClient.convertToType(data['example'], Object);
        if (data.hasOwnProperty('externalDocs')) obj.externalDocs = _ExternalDocumentation.ExternalDocumentation.constructFromObject(data['externalDocs']);
        if (data.hasOwnProperty('deprecated')) obj.deprecated = _ApiClient.ApiClient.convertToType(data['deprecated'], 'Boolean');
        if (data.hasOwnProperty('xml')) obj.xml = _XML.XML.constructFromObject(data['xml']);
      }
      return obj;
    }
  }]);
  return Schema;
}();
/**
 * @member {String} title
 */
exports.Schema = Schema;
Schema.prototype.title = undefined;

/**
 * @member {Number} multipleOf
 */
Schema.prototype.multipleOf = undefined;

/**
 * @member {Number} maximum
 */
Schema.prototype.maximum = undefined;

/**
 * @member {Boolean} exclusiveMaximum
 * @default false
 */
Schema.prototype.exclusiveMaximum = false;

/**
 * @member {Number} minimum
 */
Schema.prototype.minimum = undefined;

/**
 * @member {Boolean} exclusiveMinimum
 * @default false
 */
Schema.prototype.exclusiveMinimum = false;

/**
 * @member {Number} maxLength
 */
Schema.prototype.maxLength = undefined;

/**
 * @member {Number} minLength
 * @default 0
 */
Schema.prototype.minLength = 0;

/**
 * @member {String} pattern
 */
Schema.prototype.pattern = undefined;

/**
 * @member {Number} maxItems
 */
Schema.prototype.maxItems = undefined;

/**
 * @member {Number} minItems
 * @default 0
 */
Schema.prototype.minItems = 0;

/**
 * @member {Boolean} uniqueItems
 * @default false
 */
Schema.prototype.uniqueItems = false;

/**
 * @member {Number} maxProperties
 */
Schema.prototype.maxProperties = undefined;

/**
 * @member {Number} minProperties
 * @default 0
 */
Schema.prototype.minProperties = 0;

/**
 * @member {Array.<String>} required
 */
Schema.prototype.required = undefined;

/**
 * @member {Array.<Object>} _enum
 */
Schema.prototype._enum = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Schema.TypeEnum = {
  /**
   * value: "array"
   * @const
   */
  _array: "array",
  /**
   * value: "boolean"
   * @const
   */
  _boolean: "boolean",
  /**
   * value: "integer"
   * @const
   */
  integer: "integer",
  /**
   * value: "number"
   * @const
   */
  _number: "number",
  /**
   * value: "object"
   * @const
   */
  _object: "object",
  /**
   * value: "string"
   * @const
   */
  _string: "string"
};
/**
 * @member {module:model/Schema.TypeEnum} type
 */
Schema.prototype.type = undefined;

/**
 * @member {Object} not
 */
Schema.prototype.not = undefined;

/**
 * @member {Array.<Object>} allOf
 */
Schema.prototype.allOf = undefined;

/**
 * @member {Array.<Object>} oneOf
 */
Schema.prototype.oneOf = undefined;

/**
 * @member {Array.<Object>} anyOf
 */
Schema.prototype.anyOf = undefined;

/**
 * @member {Object} items
 */
Schema.prototype.items = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
Schema.prototype.properties = undefined;

/**
 * @member {Object} additionalProperties
 */
Schema.prototype.additionalProperties = undefined;

/**
 * @member {String} description
 */
Schema.prototype.description = undefined;

/**
 * @member {String} format
 */
Schema.prototype.format = undefined;

/**
 * @member {Object} _default
 */
Schema.prototype._default = undefined;

/**
 * @member {Boolean} nullable
 * @default false
 */
Schema.prototype.nullable = false;

/**
 * @member {module:model/Discriminator} discriminator
 */
Schema.prototype.discriminator = undefined;

/**
 * @member {Boolean} readOnly
 * @default false
 */
Schema.prototype.readOnly = false;

/**
 * @member {Boolean} writeOnly
 * @default false
 */
Schema.prototype.writeOnly = false;

/**
 * @member {Object} example
 */
Schema.prototype.example = undefined;

/**
 * @member {module:model/ExternalDocumentation} externalDocs
 */
Schema.prototype.externalDocs = undefined;

/**
 * @member {Boolean} deprecated
 * @default false
 */
Schema.prototype.deprecated = false;

/**
 * @member {module:model/XML} xml
 */
Schema.prototype.xml = undefined;

// Implement OneOfSchemaNot interface:
// Implement OneOfSchemaAllOfItems interface:
// Implement OneOfSchemaOneOfItems interface:
// Implement OneOfSchemaAnyOfItems interface:
// Implement OneOfSchemaItems interface:
// Implement OneOfSchemaAdditionalProperties interface: