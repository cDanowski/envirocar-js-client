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
    describe('UserStatisticTrackSummaries', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.UserStatisticTrackSummaries();
      });

      it('should create an instance of UserStatisticTrackSummaries', function() {
        // TODO: update the code to test UserStatisticTrackSummaries
        expect(instance).to.be.a(EnviroCarRestApi.UserStatisticTrackSummaries);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property startPosition (base name: "startPosition")', function() {
        // TODO: update the code to test the property startPosition
        expect(instance).to.have.property('startPosition');
        // expect(instance.startPosition).to.be(expectedValueLiteral);
      });

      it('should have the property endPosition (base name: "endPosition")', function() {
        // TODO: update the code to test the property endPosition
        expect(instance).to.have.property('endPosition');
        // expect(instance.endPosition).to.be(expectedValueLiteral);
      });

    });
  });

}));