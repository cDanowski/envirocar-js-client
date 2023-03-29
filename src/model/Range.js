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
 * The Range model module.
 * @module model/Range
 * @version 1.0.0
 */
export class Range {
  /**
   * Constructs a new <code>Range</code>.
   * @alias module:model/Range
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Range</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Range} obj Optional instance to populate.
   * @return {module:model/Range} The populated <code>Range</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Range();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} items
 */
Range.prototype.items = undefined;

