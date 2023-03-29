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
    describe('TrackcreateProperties', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.TrackcreateProperties();
      });

      it('should create an instance of TrackcreateProperties', function() {
        // TODO: update the code to test TrackcreateProperties
        expect(instance).to.be.a(EnviroCarRestApi.TrackcreateProperties);
      });

      it('should have the property sensor (base name: "sensor")', function() {
        // TODO: update the code to test the property sensor
        expect(instance).to.have.property('sensor');
        // expect(instance.sensor).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property appVersion (base name: "appVersion")', function() {
        // TODO: update the code to test the property appVersion
        expect(instance).to.have.property('appVersion');
        // expect(instance.appVersion).to.be(expectedValueLiteral);
      });

      it('should have the property obdDevice (base name: "obdDevice")', function() {
        // TODO: update the code to test the property obdDevice
        expect(instance).to.have.property('obdDevice');
        // expect(instance.obdDevice).to.be(expectedValueLiteral);
      });

      it('should have the property touVersion (base name: "touVersion")', function() {
        // TODO: update the code to test the property touVersion
        expect(instance).to.have.property('touVersion');
        // expect(instance.touVersion).to.be(expectedValueLiteral);
      });

      it('should have the property length (base name: "length")', function() {
        // TODO: update the code to test the property length
        expect(instance).to.have.property('length');
        // expect(instance.length).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
