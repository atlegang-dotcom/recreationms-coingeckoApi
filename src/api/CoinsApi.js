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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Coins', 'model/Symbol'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Coins'), require('../model/Symbol'));
  } else {
    // Browser globals (root is window)
    if (!root.RecreationmsCoingeckoApi) {
      root.RecreationmsCoingeckoApi = {};
    }
    root.RecreationmsCoingeckoApi.CoinsApi = factory(root.RecreationmsCoingeckoApi.ApiClient, root.RecreationmsCoingeckoApi.Coins, root.RecreationmsCoingeckoApi.Symbol);
  }
}(this, function(ApiClient, Coins, Symbol) {
  'use strict';

  /**
   * Coins service.
   * @module api/CoinsApi
   * @version 1.0.2
   */

  /**
   * Constructs a new CoinsApi. 
   * @alias module:api/CoinsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the coinsListGet operation.
     * @callback module:api/CoinsApi~coinsListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Coins>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * return coin data
     * returns all coin data and its symbols
     * @param {module:api/CoinsApi~coinsListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Coins>}
     */
    this.coinsListGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Coins];

      return this.apiClient.callApi(
        '/coins/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simpleSupportedVsCurrenciesGet operation.
     * @callback module:api/CoinsApi~simpleSupportedVsCurrenciesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Symbol>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get supported vs currencies
     * returns all supported vs currencies
     * @param {module:api/CoinsApi~simpleSupportedVsCurrenciesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Symbol>}
     */
    this.simpleSupportedVsCurrenciesGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Symbol];

      return this.apiClient.callApi(
        '/simple/supported_vs_currencies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
