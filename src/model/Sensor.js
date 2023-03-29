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
import {Base} from './Base';
import {SensorProperties} from './SensorProperties';

/**
 * The Sensor model module.
 * @module model/Sensor
 * @version 1.0.0
 */
export class Sensor extends Base {
  /**
   * Constructs a new <code>Sensor</code>.
   * @alias module:model/Sensor
   * @class
   * @extends module:model/Base
   * @param type {} 
   * @param properties {} 
   */
  constructor(type, properties) {
    super(type, properties);
  }

  /**
   * Constructs a <code>Sensor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sensor} obj Optional instance to populate.
   * @return {module:model/Sensor} The populated <code>Sensor</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Sensor();
      Base.constructFromObject(data, obj);
      if (data.hasOwnProperty('properties'))
        obj.properties = SensorProperties.constructFromObject(data['properties']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SensorProperties} properties
 */
Sensor.prototype.properties = undefined;
