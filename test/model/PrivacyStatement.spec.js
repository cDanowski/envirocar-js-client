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
    describe('PrivacyStatement', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.PrivacyStatement();
      });

      it('should create an instance of PrivacyStatement', function() {
        // TODO: update the code to test PrivacyStatement
        expect(instance).to.be.a(EnviroCarRestApi.PrivacyStatement);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property modified (base name: "modified")', function() {
        // TODO: update the code to test the property modified
        expect(instance).to.have.property('modified');
        // expect(instance.modified).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property issuedDate (base name: "issuedDate")', function() {
        // TODO: update the code to test the property issuedDate
        expect(instance).to.have.property('issuedDate');
        // expect(instance.issuedDate).to.be(expectedValueLiteral);
      });

      it('should have the property contents (base name: "contents")', function() {
        // TODO: update the code to test the property contents
        expect(instance).to.have.property('contents');
        // expect(instance.contents).to.be(expectedValueLiteral);
      });

    });
  });

}));