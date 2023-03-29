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

  beforeEach(function() {
    instance = new EnviroCarRestApi.FuelingsApi();
  });

  describe('(package)', function() {
    describe('FuelingsApi', function() {
      describe('createFueling', function() {
        it('should call createFueling successfully', function(done) {
          // TODO: uncomment, update parameter values for createFueling call
          /*

          instance.createFueling(body, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteFueling', function() {
        it('should call deleteFueling successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteFueling call
          /*

          instance.deleteFueling(userId, fuelingId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFueling', function() {
        it('should call getFueling successfully', function(done) {
          // TODO: uncomment, update parameter values for getFueling call and complete the assertions
          /*

          instance.getFueling(userId, fuelingId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EnviroCarRestApi.Fueling);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFuelings', function() {
        it('should call getFuelings successfully', function(done) {
          // TODO: uncomment, update parameter values for getFuelings call and complete the assertions
          /*
          var opts = {};

          instance.getFuelings(userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EnviroCarRestApi.Fuelings);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
