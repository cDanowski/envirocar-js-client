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
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
export class Group {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   * @param description {String} 
   * @param name {String} 
   */
  constructor(description, name) {
    this.description = description;
    this.name = name;
  }

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Group();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('modified'))
        obj.modified = ApiClient.convertToType(data['modified'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = User.constructFromObject(data['owner']);
    }
    return obj;
  }
}

/**
 * @member {Date} created
 */
Group.prototype.created = undefined;

/**
 * @member {String} description
 */
Group.prototype.description = undefined;

/**
 * @member {Date} modified
 */
Group.prototype.modified = undefined;

/**
 * @member {String} name
 */
Group.prototype.name = undefined;

/**
 * @member {module:model/User} owner
 */
Group.prototype.owner = undefined;
