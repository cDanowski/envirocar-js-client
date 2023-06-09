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
    describe('FuelingCreate', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.FuelingCreate();
      });

      it('should create an instance of FuelingCreate', function() {
        // TODO: update the code to test FuelingCreate
        expect(instance).to.be.a(EnviroCarRestApi.FuelingCreate);
      });

      it('should have the property fuelType (base name: "fuelType")', function() {
        // TODO: update the code to test the property fuelType
        expect(instance).to.have.property('fuelType');
        // expect(instance.fuelType).to.be(expectedValueLiteral);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property car (base name: "car")', function() {
        // TODO: update the code to test the property car
        expect(instance).to.have.property('car');
        // expect(instance.car).to.be(expectedValueLiteral);
      });

      it('should have the property cost (base name: "cost")', function() {
        // TODO: update the code to test the property cost
        expect(instance).to.have.property('cost');
        // expect(instance.cost).to.be(expectedValueLiteral);
      });

      it('should have the property mileage (base name: "mileage")', function() {
        // TODO: update the code to test the property mileage
        expect(instance).to.have.property('mileage');
        // expect(instance.mileage).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property missedFuelStop (base name: "missedFuelStop")', function() {
        // TODO: update the code to test the property missedFuelStop
        expect(instance).to.have.property('missedFuelStop');
        // expect(instance.missedFuelStop).to.be(expectedValueLiteral);
      });

    });
  });

}));
