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
import {TrackReference} from './TrackReference';

/**
 * The TrackActivity model module.
 * @module model/TrackActivity
 * @version 1.0.0
 */
export class TrackActivity {
  /**
   * Constructs a new <code>TrackActivity</code>.
   * @alias module:model/TrackActivity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackActivity} obj Optional instance to populate.
   * @return {module:model/TrackActivity} The populated <code>TrackActivity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackActivity();
      if (data.hasOwnProperty('track'))
        obj.track = TrackReference.constructFromObject(data['track']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/TrackReference} track
 */
TrackActivity.prototype.track = undefined;

/**
 * @member {String} type
 */
TrackActivity.prototype.type = undefined;

// Implement OneOfactivity interface:
