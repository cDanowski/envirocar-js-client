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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EnviroCarRestApi);
  }
}(this, function(expect, EnviroCarRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OptionalUserProperties', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.OptionalUserProperties();
      });

      it('should create an instance of OptionalUserProperties', function() {
        // TODO: update the code to test OptionalUserProperties
        expect(instance).to.be.a(EnviroCarRestApi.OptionalUserProperties);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property location (base name: "location")', function() {
        // TODO: update the code to test the property location
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

      it('should have the property aboutMe (base name: "aboutMe")', function() {
        // TODO: update the code to test the property aboutMe
        expect(instance).to.have.property('aboutMe');
        // expect(instance.aboutMe).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property dayOfBirth (base name: "dayOfBirth")', function() {
        // TODO: update the code to test the property dayOfBirth
        expect(instance).to.have.property('dayOfBirth');
        // expect(instance.dayOfBirth).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property badges (base name: "badges")', function() {
        // TODO: update the code to test the property badges
        expect(instance).to.have.property('badges');
        // expect(instance.badges).to.be(expectedValueLiteral);
      });

      it('should have the property acceptedTermsOfUseVersion (base name: "acceptedTermsOfUseVersion")', function() {
        // TODO: update the code to test the property acceptedTermsOfUseVersion
        expect(instance).to.have.property('acceptedTermsOfUseVersion');
        // expect(instance.acceptedTermsOfUseVersion).to.be(expectedValueLiteral);
      });

      it('should have the property acceptedPrivacyStatementVersion (base name: "acceptedPrivacyStatementVersion")', function() {
        // TODO: update the code to test the property acceptedPrivacyStatementVersion
        expect(instance).to.have.property('acceptedPrivacyStatementVersion');
        // expect(instance.acceptedPrivacyStatementVersion).to.be(expectedValueLiteral);
      });

    });
  });

}));