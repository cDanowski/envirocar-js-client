/*
 * enviroCar REST API
 * enviroCar REST API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@envirocar.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {MeasurementcreatePropertiesPhenomenons} from './MeasurementcreatePropertiesPhenomenons';

/**
 * The MeasurementcreateProperties model module.
 * @module model/MeasurementcreateProperties
 * @version 1.0.0
 */
export class MeasurementcreateProperties {
  /**
   * Constructs a new <code>MeasurementcreateProperties</code>.
   * @alias module:model/MeasurementcreateProperties
   * @class
   * @param time {Date} 
   */
  constructor(time) {
    this.time = time;
  }

  /**
   * Constructs a <code>MeasurementcreateProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementcreateProperties} obj Optional instance to populate.
   * @return {module:model/MeasurementcreateProperties} The populated <code>MeasurementcreateProperties</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MeasurementcreateProperties();
      if (data.hasOwnProperty('sensor'))
        obj.sensor = ApiClient.convertToType(data['sensor'], 'String');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('phenomenons'))
        obj.phenomenons = ApiClient.convertToType(data['phenomenons'], {'String': MeasurementcreatePropertiesPhenomenons});
    }
    return obj;
  }
}

/**
 * the id of an existing sensor
 * @member {String} sensor
 */
MeasurementcreateProperties.prototype.sensor = undefined;

/**
 * @member {Date} time
 */
MeasurementcreateProperties.prototype.time = undefined;

/**
 * @member {Object.<String, module:model/MeasurementcreatePropertiesPhenomenons>} phenomenons
 */
MeasurementcreateProperties.prototype.phenomenons = undefined;
