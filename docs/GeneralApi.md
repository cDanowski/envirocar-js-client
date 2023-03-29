# EnviroCarRestApi.GeneralApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDocs**](GeneralApi.md#apiDocs) | **GET** /api-docs | Get the OpenAPI specification of this service.
[**getRoot**](GeneralApi.md#getRoot) | **GET** / | Get the root index.

<a name="apiDocs"></a>
# **apiDocs**
> Model20210928 apiDocs()

Get the OpenAPI specification of this service.

Get the OpenAPI specification of this service.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.GeneralApi();
apiInstance.apiDocs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Model20210928**](Model20210928.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml, text/html

<a name="getRoot"></a>
# **getRoot**
> Root getRoot()

Get the root index.

Get the root index.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.GeneralApi();
apiInstance.getRoot((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Root**](Root.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

