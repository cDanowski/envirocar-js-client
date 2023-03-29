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
import {PrivacystatementsPrivacyStatements} from './PrivacystatementsPrivacyStatements';

/**
 * The TermsOfUse model module.
 * @module model/TermsOfUse
 * @version 1.0.0
 */
export class TermsOfUse {
  /**
   * Constructs a new <code>TermsOfUse</code>.
   * @alias module:model/TermsOfUse
   * @class
   * @param termsOfUse {Array.<module:model/PrivacystatementsPrivacyStatements>} 
   */
  constructor(termsOfUse) {
    this.termsOfUse = termsOfUse;
  }

  /**
   * Constructs a <code>TermsOfUse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TermsOfUse} obj Optional instance to populate.
   * @return {module:model/TermsOfUse} The populated <code>TermsOfUse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TermsOfUse();
      if (data.hasOwnProperty('termsOfUse'))
        obj.termsOfUse = ApiClient.convertToType(data['termsOfUse'], [PrivacystatementsPrivacyStatements]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/PrivacystatementsPrivacyStatements>} termsOfUse
 */
TermsOfUse.prototype.termsOfUse = undefined;

