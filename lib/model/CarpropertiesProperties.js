"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarpropertiesProperties = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CarpropertiesProperties model module.
 * @module model/CarpropertiesProperties
 * @version 1.0.0
 */
var CarpropertiesProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CarpropertiesProperties</code>.
   * @alias module:model/CarpropertiesProperties
   * @class
   */
  function CarpropertiesProperties() {
    _classCallCheck(this, CarpropertiesProperties);
  }

  /**
   * Constructs a <code>CarpropertiesProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarpropertiesProperties} obj Optional instance to populate.
   * @return {module:model/CarpropertiesProperties} The populated <code>CarpropertiesProperties</code> instance.
   */
  _createClass(CarpropertiesProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CarpropertiesProperties();
        if (data.hasOwnProperty('manufacturer')) obj.manufacturer = _ApiClient.ApiClient.convertToType(data['manufacturer'], 'String');
        if (data.hasOwnProperty('model')) obj.model = _ApiClient.ApiClient.convertToType(data['model'], 'String');
        if (data.hasOwnProperty('fuelType')) obj.fuelType = _ApiClient.ApiClient.convertToType(data['fuelType'], 'String');
        if (data.hasOwnProperty('constructionYear')) obj.constructionYear = _ApiClient.ApiClient.convertToType(data['constructionYear'], 'Number');
        if (data.hasOwnProperty('VIN')) obj.VIN = _ApiClient.ApiClient.convertToType(data['VIN'], 'String');
      }
      return obj;
    }
  }]);
  return CarpropertiesProperties;
}();
/**
 * @member {String} manufacturer
 */
exports.CarpropertiesProperties = CarpropertiesProperties;
CarpropertiesProperties.prototype.manufacturer = undefined;

/**
 * @member {String} model
 */
CarpropertiesProperties.prototype.model = undefined;

/**
 * Allowed values for the <code>fuelType</code> property.
 * @enum {String}
 * @readonly
 */
CarpropertiesProperties.FuelTypeEnum = {
  /**
   * value: "diesel"
   * @const
   */
  diesel: "diesel",
  /**
   * value: "gasoline"
   * @const
   */
  gasoline: "gasoline",
  /**
   * value: "biodiesel"
   * @const
   */
  biodiesel: "biodiesel",
  /**
   * value: "kerosene"
   * @const
   */
  kerosene: "kerosene",
  /**
   * value: "electric"
   * @const
   */
  electric: "electric",
  /**
   * value: "hybrid"
   * @const
   */
  hybrid: "hybrid",
  /**
   * value: "gas"
   * @const
   */
  gas: "gas"
};
/**
 * @member {module:model/CarpropertiesProperties.FuelTypeEnum} fuelType
 */
CarpropertiesProperties.prototype.fuelType = undefined;

/**
 * @member {Number} constructionYear
 */
CarpropertiesProperties.prototype.constructionYear = undefined;

/**
 * @member {String} VIN
 */
CarpropertiesProperties.prototype.VIN = undefined;