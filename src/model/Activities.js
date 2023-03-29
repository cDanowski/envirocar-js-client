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
import {Activity} from './Activity';

/**
 * The Activities model module.
 * @module model/Activities
 * @version 1.0.0
 */
export class Activities {
  /**
   * Constructs a new <code>Activities</code>.
   * @alias module:model/Activities
   * @class
   * @param activities {Array.<module:model/Activity>} 
   */
  constructor(activities) {
    this.activities = activities;
  }

  /**
   * Constructs a <code>Activities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Activities} obj Optional instance to populate.
   * @return {module:model/Activities} The populated <code>Activities</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Activities();
      if (data.hasOwnProperty('activities'))
        obj.activities = ApiClient.convertToType(data['activities'], [Activity]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Activity>} activities
 */
Activities.prototype.activities = undefined;

