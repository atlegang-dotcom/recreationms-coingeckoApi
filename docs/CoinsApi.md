# RecreationmsCoingeckoApi.CoinsApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinsListGet**](CoinsApi.md#coinsListGet) | **GET** /coins/list | return coin data
[**simpleSupportedVsCurrenciesGet**](CoinsApi.md#simpleSupportedVsCurrenciesGet) | **GET** /simple/supported_vs_currencies | get supported vs currencies


<a name="coinsListGet"></a>
# **coinsListGet**
> [Coins] coinsListGet()

return coin data

returns all coin data and its symbols

### Example
```javascript
var RecreationmsCoingeckoApi = require('recreationms_coingecko_api');

var apiInstance = new RecreationmsCoingeckoApi.CoinsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coinsListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Coins]**](Coins.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="simpleSupportedVsCurrenciesGet"></a>
# **simpleSupportedVsCurrenciesGet**
> [Symbol] simpleSupportedVsCurrenciesGet()

get supported vs currencies

returns all supported vs currencies

### Example
```javascript
var RecreationmsCoingeckoApi = require('recreationms_coingecko_api');

var apiInstance = new RecreationmsCoingeckoApi.CoinsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.simpleSupportedVsCurrenciesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Symbol]**](Symbol.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

