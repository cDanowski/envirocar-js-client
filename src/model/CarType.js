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

/**
 * The CarType model module.
 * @module model/CarType
 * @version 1.0.0
 */
export class CarType {
  /**
   * Constructs a new <code>CarType</code>.
   * @alias module:model/CarType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CarType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarType} obj Optional instance to populate.
   * @return {module:model/CarType} The populated <code>CarType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CarType();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
CarType.prototype.type = undefined;

