# RecreationmsCoingeckoApi.PingApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingGet**](PingApi.md#pingGet) | **GET** /ping | check server


<a name="pingGet"></a>
# **pingGet**
> Object pingGet()

check server

it checks the server if its alive or not

### Example
```javascript
var RecreationmsCoingeckoApi = require('recreationms_coingecko_api');

var apiInstance = new RecreationmsCoingeckoApi.PingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pingGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

