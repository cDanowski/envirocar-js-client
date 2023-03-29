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
    describe('Model20210928', function() {
      beforeEach(function() {
        instance = new EnviroCarRestApi.Model20210928();
      });

      it('should create an instance of Model20210928', function() {
        // TODO: update the code to test Model20210928
        expect(instance).to.be.a(EnviroCarRestApi.Model20210928);
      });

      it('should have the property openapi (base name: "openapi")', function() {
        // TODO: update the code to test the property openapi
        expect(instance).to.have.property('openapi');
        // expect(instance.openapi).to.be(expectedValueLiteral);
      });

      it('should have the property info (base name: "info")', function() {
        // TODO: update the code to test the property info
        expect(instance).to.have.property('info');
        // expect(instance.info).to.be(expectedValueLiteral);
      });

      it('should have the property externalDocs (base name: "externalDocs")', function() {
        // TODO: update the code to test the property externalDocs
        expect(instance).to.have.property('externalDocs');
        // expect(instance.externalDocs).to.be(expectedValueLiteral);
      });

      it('should have the property servers (base name: "servers")', function() {
        // TODO: update the code to test the property servers
        expect(instance).to.have.property('servers');
        // expect(instance.servers).to.be(expectedValueLiteral);
      });

      it('should have the property security (base name: "security")', function() {
        // TODO: update the code to test the property security
        expect(instance).to.have.property('security');
        // expect(instance.security).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property paths (base name: "paths")', function() {
        // TODO: update the code to test the property paths
        expect(instance).to.have.property('paths');
        // expect(instance.paths).to.be(expectedValueLiteral);
      });

      it('should have the property components (base name: "components")', function() {
        // TODO: update the code to test the property components
        expect(instance).to.have.property('components');
        // expect(instance.components).to.be(expectedValueLiteral);
      });

    });
  });

}));
