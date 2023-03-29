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
import {User} from './User';

/**
 * The MeasurementProperties model module.
 * @module model/MeasurementProperties
 * @version 1.0.0
 */
export class MeasurementProperties {
  /**
   * Constructs a new <code>MeasurementProperties</code>.
   * @alias module:model/MeasurementProperties
   * @class
   * @param id {String} 
   * @param time {Date} 
   * @param phenomenons {Object} 
   */
  constructor(id, time, phenomenons) {
    this.id = id;
    this.time = time;
    this.phenomenons = phenomenons;
  }

  /**
   * Constructs a <code>MeasurementProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementProperties} obj Optional instance to populate.
   * @return {module:model/MeasurementProperties} The populated <code>MeasurementProperties</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MeasurementProperties();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('modified'))
        obj.modified = ApiClient.convertToType(data['modified'], 'Date');
      if (data.hasOwnProperty('sensor'))
        obj.sensor = Sensor.constructFromObject(data['sensor']);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
      if (data.hasOwnProperty('track'))
        obj.track = ApiClient.convertToType(data['track'], 'String');
      if (data.hasOwnProperty('phenomenons'))
        obj.phenomenons = ApiClient.convertToType(data['phenomenons'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
MeasurementProperties.prototype.id = undefined;

/**
 * @member {Date} created
 */
MeasurementProperties.prototype.created = undefined;

/**
 * @member {Date} modified
 */
MeasurementProperties.prototype.modified = undefined;

/**
 * @member {module:model/Sensor} sensor
 */
MeasurementProperties.prototype.sensor = undefined;

/**
 * @member {Date} time
 */
MeasurementProperties.prototype.time = undefined;

/**
 * @member {module:model/User} user
 */
MeasurementProperties.prototype.user = undefined;

/**
 * @member {String} track
 */
MeasurementProperties.prototype.track = undefined;

/**
 * @member {Object} phenomenons
 */
MeasurementProperties.prototype.phenomenons = undefined;
