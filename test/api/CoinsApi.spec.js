/*
 * RECREATIONMS_coingeckoApi
 * this is an api to test the skill of the RecreationMS programming department
 *
 * OpenAPI spec version: 1.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    factory(root.expect, root.RecreationmsCoingeckoApi);
  }
}(this, function(expect, RecreationmsCoingeckoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RecreationmsCoingeckoApi.CoinsApi();
  });

  describe('(package)', function() {
    describe('CoinsApi', function() {
      describe('coinsListGet', function() {
        it('should call coinsListGet successfully', function(done) {
          // TODO: uncomment coinsListGet call and complete the assertions
          /*

          instance.coinsListGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(RecreationmsCoingeckoApi.Coins);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.symbol).to.be.a('string');
              expect(data.symbol).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('simpleSupportedVsCurrenciesGet', function() {
        it('should call simpleSupportedVsCurrenciesGet successfully', function(done) {
          // TODO: uncomment simpleSupportedVsCurrenciesGet call and complete the assertions
          /*

          instance.simpleSupportedVsCurrenciesGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(RecreationmsCoingeckoApi.Symbol);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("usd");
            }

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
