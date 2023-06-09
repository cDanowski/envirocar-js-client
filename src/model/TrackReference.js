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
import {Sensor} from './Sensor';
import {TrackStatus} from './TrackStatus';

/**
 * The TrackReference model module.
 * @module model/TrackReference
 * @version 1.0.0
 */
export class TrackReference {
  /**
   * Constructs a new <code>TrackReference</code>.
   * @alias module:model/TrackReference
   * @class
   * @param id {String} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>TrackReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackReference} obj Optional instance to populate.
   * @return {module:model/TrackReference} The populated <code>TrackReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackReference();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('modified'))
        obj.modified = ApiClient.convertToType(data['modified'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('begin'))
        obj.begin = ApiClient.convertToType(data['begin'], 'Date');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Date');
      if (data.hasOwnProperty('sensor'))
        obj.sensor = Sensor.constructFromObject(data['sensor']);
      if (data.hasOwnProperty('length'))
        obj.length = ApiClient.convertToType(data['length'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = TrackStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
TrackReference.prototype.id = undefined;

/**
 * @member {Date} modified
 */
TrackReference.prototype.modified = undefined;

/**
 * @member {String} name
 */
TrackReference.prototype.name = undefined;

/**
 * @member {Date} begin
 */
TrackReference.prototype.begin = undefined;

/**
 * @member {Date} end
 */
TrackReference.prototype.end = undefined;

/**
 * @member {module:model/Sensor} sensor
 */
TrackReference.prototype.sensor = undefined;

/**
 * @member {Number} length
 */
TrackReference.prototype.length = undefined;

/**
 * @member {module:model/TrackStatus} status
 */
TrackReference.prototype.status = undefined;

