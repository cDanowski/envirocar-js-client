"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FuelingCreate = void 0;
var _ApiClient = require("../ApiClient");
var _NumberWithUnit = require("./NumberWithUnit");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The FuelingCreate model module.
 * @module model/FuelingCreate
 * @version 1.0.0
 */
var FuelingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FuelingCreate</code>.
   * @alias module:model/FuelingCreate
   * @class
   * @param fuelType {String} 
   * @param car {String} 
   * @param cost {module:model/NumberWithUnit} 
   * @param mileage {module:model/NumberWithUnit} 
   * @param volume {module:model/NumberWithUnit} 
   * @param time {Date} 
   */
  function FuelingCreate(fuelType, car, cost, mileage, volume, time) {
    _classCallCheck(this, FuelingCreate);
    this.fuelType = fuelType;
    this.car = car;
    this.cost = cost;
    this.mileage = mileage;
    this.volume = volume;
    this.time = time;
  }

  /**
   * Constructs a <code>FuelingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuelingCreate} obj Optional instance to populate.
   * @return {module:model/FuelingCreate} The populated <code>FuelingCreate</code> instance.
   */
  _createClass(FuelingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FuelingCreate();
        if (data.hasOwnProperty('fuelType')) obj.fuelType = _ApiClient.ApiClient.convertToType(data['fuelType'], 'String');
        if (data.hasOwnProperty('comment')) obj.comment = _ApiClient.ApiClient.convertToType(data['comment'], 'String');
        if (data.hasOwnProperty('car')) obj.car = _ApiClient.ApiClient.convertToType(data['car'], 'String');
        if (data.hasOwnProperty('cost')) obj.cost = _NumberWithUnit.NumberWithUnit.constructFromObject(data['cost']);
        if (data.hasOwnProperty('mileage')) obj.mileage = _NumberWithUnit.NumberWithUnit.constructFromObject(data['mileage']);
        if (data.hasOwnProperty('volume')) obj.volume = _NumberWithUnit.NumberWithUnit.constructFromObject(data['volume']);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('missedFuelStop')) obj.missedFuelStop = _ApiClient.ApiClient.convertToType(data['missedFuelStop'], 'Boolean');
      }
      return obj;
    }
  }]);
  return FuelingCreate;
}();
/**
 * @member {String} fuelType
 */
exports.FuelingCreate = FuelingCreate;
FuelingCreate.prototype.fuelType = undefined;

/**
 * @member {String} comment
 */
FuelingCreate.prototype.comment = undefined;

/**
 * @member {String} car
 */
FuelingCreate.prototype.car = undefined;

/**
 * @member {module:model/NumberWithUnit} cost
 */
FuelingCreate.prototype.cost = undefined;

/**
 * @member {module:model/NumberWithUnit} mileage
 */
FuelingCreate.prototype.mileage = undefined;

/**
 * @member {module:model/NumberWithUnit} volume
 */
FuelingCreate.prototype.volume = undefined;

/**
 * @member {Date} time
 */
FuelingCreate.prototype.time = undefined;

/**
 * @member {Boolean} missedFuelStop
 */
FuelingCreate.prototype.missedFuelStop = undefined;