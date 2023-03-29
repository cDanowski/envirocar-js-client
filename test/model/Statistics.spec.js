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
    describe('Statistics', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.Statistics();
      });

      it('should create an instance of Statistics', function() {
        // TODO: update the code to test Statistics
        expect(instance).to.be.a(EnviroCarRestApi.Statistics);
      });

      it('should have the property statistics (base name: "statistics")', function() {
        // TODO: update the code to test the property statistics
        expect(instance).to.have.property('statistics');
        // expect(instance.statistics).to.be(expectedValueLiteral);
      });

    });
  });

}));
