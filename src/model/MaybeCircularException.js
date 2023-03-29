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
 * The MaybeCircularException model module.
 * @module model/MaybeCircularException
 * @version 1.0.0
 */
export class MaybeCircularException {
  /**
   * Constructs a new <code>MaybeCircularException</code>.
   * @alias module:model/MaybeCircularException
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MaybeCircularException</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaybeCircularException} obj Optional instance to populate.
   * @return {module:model/MaybeCircularException} The populated <code>MaybeCircularException</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MaybeCircularException();
    }
    return obj;
  }
}
