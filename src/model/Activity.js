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
import {User} from './User';

/**
 * The Activity model module.
 * @module model/Activity
 * @version 1.0.0
 */
export class Activity {
  /**
   * Constructs a new <code>Activity</code>.
   * @alias module:model/Activity
   * @class
   * @param time {} 
   * @param user {} 
   * @param type {} 
   */
  constructor(time, user, type) {
    this.time = time;
    this.user = user;
    this.type = type;
  }

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Activity} obj Optional instance to populate.
   * @return {module:model/Activity} The populated <code>Activity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Activity();
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} time
 */
Activity.prototype.time = undefined;

/**
 * @member {module:model/User} user
 */
Activity.prototype.user = undefined;

/**
 * @member {String} type
 */
Activity.prototype.type = undefined;

// Implement OneOfactivity interface: