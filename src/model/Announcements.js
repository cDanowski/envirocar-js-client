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
import {Announcement} from './Announcement';

/**
 * The Announcements model module.
 * @module model/Announcements
 * @version 1.0.0
 */
export class Announcements {
  /**
   * Constructs a new <code>Announcements</code>.
   * @alias module:model/Announcements
   * @class
   * @param announcements {Array.<module:model/Announcement>} 
   */
  constructor(announcements) {
    this.announcements = announcements;
  }

  /**
   * Constructs a <code>Announcements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Announcements} obj Optional instance to populate.
   * @return {module:model/Announcements} The populated <code>Announcements</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Announcements();
      if (data.hasOwnProperty('announcements'))
        obj.announcements = ApiClient.convertToType(data['announcements'], [Announcement]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Announcement>} announcements
 */
Announcements.prototype.announcements = undefined;

