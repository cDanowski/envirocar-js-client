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
 * The PrivacystatementsPrivacyStatements model module.
 * @module model/PrivacystatementsPrivacyStatements
 * @version 1.0.0
 */
export class PrivacystatementsPrivacyStatements {
  /**
   * Constructs a new <code>PrivacystatementsPrivacyStatements</code>.
   * @alias module:model/PrivacystatementsPrivacyStatements
   * @class
   * @param id {String} 
   * @param issuedDate {Date} 
   */
  constructor(id, issuedDate) {
    this.id = id;
    this.issuedDate = issuedDate;
  }

  /**
   * Constructs a <code>PrivacystatementsPrivacyStatements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrivacystatementsPrivacyStatements} obj Optional instance to populate.
   * @return {module:model/PrivacystatementsPrivacyStatements} The populated <code>PrivacystatementsPrivacyStatements</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PrivacystatementsPrivacyStatements();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('issuedDate'))
        obj.issuedDate = ApiClient.convertToType(data['issuedDate'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
PrivacystatementsPrivacyStatements.prototype.id = undefined;

/**
 * @member {Date} issuedDate
 */
PrivacystatementsPrivacyStatements.prototype.issuedDate = undefined;
