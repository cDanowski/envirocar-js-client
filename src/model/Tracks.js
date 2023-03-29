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
 * The Tracks model module.
 * @module model/Tracks
 * @version 1.0.0
 */
export class Tracks {
  /**
   * Constructs a new <code>Tracks</code>.
   * @alias module:model/Tracks
   * @class
   * @param tracks {Array.<module:model/TrackReference>} 
   */
  constructor(tracks) {
    this.tracks = tracks;
  }

  /**
   * Constructs a <code>Tracks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tracks} obj Optional instance to populate.
   * @return {module:model/Tracks} The populated <code>Tracks</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tracks();
      if (data.hasOwnProperty('tracks'))
        obj.tracks = ApiClient.convertToType(data['tracks'], [TrackReference]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TrackReference>} tracks
 */
Tracks.prototype.tracks = undefined;

