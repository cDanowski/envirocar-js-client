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
    describe('Sensor', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.Sensor();
      });

      it('should create an instance of Sensor', function() {
        // TODO: update the code to test Sensor
        expect(instance).to.be.a(EnviroCarRestApi.Sensor);
      });

      it('should have the property properties (base name: "properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

    });
  });

}));
