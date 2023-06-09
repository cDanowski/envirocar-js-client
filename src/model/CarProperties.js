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
import {CarpropertiesProperties} from './CarpropertiesProperties';

/**
 * The CarProperties model module.
 * @module model/CarProperties
 * @version 1.0.0
 */
export class CarProperties {
  /**
   * Constructs a new <code>CarProperties</code>.
   * @alias module:model/CarProperties
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CarProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarProperties} obj Optional instance to populate.
   * @return {module:model/CarProperties} The populated <code>CarProperties</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CarProperties();
      if (data.hasOwnProperty('properties'))
        obj.properties = CarpropertiesProperties.constructFromObject(data['properties']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CarpropertiesProperties} properties
 */
CarProperties.prototype.properties = undefined;

