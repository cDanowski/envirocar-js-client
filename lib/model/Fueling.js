"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fueling = void 0;
var _ApiClient = require("../ApiClient");
var _NumberWithUnit = require("./NumberWithUnit");
var _Sensor = require("./Sensor");
var _User = require("./User");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Fueling model module.
 * @module model/Fueling
 * @version 1.0.0
 */
var Fueling = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Fueling</code>.
   * @alias module:model/Fueling
   * @class
   */
  function Fueling() {
    _classCallCheck(this, Fueling);
  }

  /**
   * Constructs a <code>Fueling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fueling} obj Optional instance to populate.
   * @return {module:model/Fueling} The populated <code>Fueling</code> instance.
   */
  _createClass(Fueling, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Fueling();
        if (data.hasOwnProperty('fuelType')) obj.fuelType = _ApiClient.ApiClient.convertToType(data['fuelType'], 'String');
        if (data.hasOwnProperty('comment')) obj.comment = _ApiClient.ApiClient.convertToType(data['comment'], 'String');
        if (data.hasOwnProperty('car')) obj.car = _Sensor.Sensor.constructFromObject(data['car']);
        if (data.hasOwnProperty('user')) obj.user = _User.User.constructFromObject(data['user']);
        if (data.hasOwnProperty('cost')) obj.cost = _NumberWithUnit.NumberWithUnit.constructFromObject(data['cost']);
        if (data.hasOwnProperty('mileage')) obj.mileage = _NumberWithUnit.NumberWithUnit.constructFromObject(data['mileage']);
        if (data.hasOwnProperty('volume')) obj.volume = _NumberWithUnit.NumberWithUnit.constructFromObject(data['volume']);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('modified')) obj.modified = _ApiClient.ApiClient.convertToType(data['modified'], 'Date');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('missedFuelStop')) obj.missedFuelStop = _ApiClient.ApiClient.convertToType(data['missedFuelStop'], 'Boolean');
        if (data.hasOwnProperty('partialFueling')) obj.partialFueling = _ApiClient.ApiClient.convertToType(data['partialFueling'], 'Boolean');
      }
      return obj;
    }
  }]);
  return Fueling;
}();
/**
 * @member {String} fuelType
 */
exports.Fueling = Fueling;
Fueling.prototype.fuelType = undefined;

/**
 * @member {String} comment
 */
Fueling.prototype.comment = undefined;

/**
 * @member {module:model/Sensor} car
 */
Fueling.prototype.car = undefined;

/**
 * @member {module:model/User} user
 */
Fueling.prototype.user = undefined;

/**
 * @member {module:model/NumberWithUnit} cost
 */
Fueling.prototype.cost = undefined;

/**
 * @member {module:model/NumberWithUnit} mileage
 */
Fueling.prototype.mileage = undefined;

/**
 * @member {module:model/NumberWithUnit} volume
 */
Fueling.prototype.volume = undefined;

/**
 * @member {Date} time
 */
Fueling.prototype.time = undefined;

/**
 * @member {Date} created
 */
Fueling.prototype.created = undefined;

/**
 * @member {Date} modified
 */
Fueling.prototype.modified = undefined;

/**
 * @member {String} id
 */
Fueling.prototype.id = undefined;

/**
 * @member {Boolean} missedFuelStop
 */
Fueling.prototype.missedFuelStop = undefined;

/**
 * @member {Boolean} partialFueling
 */
Fueling.prototype.partialFueling = undefined;