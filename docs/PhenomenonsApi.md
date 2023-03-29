# EnviroCarRestApi.PhenomenonsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPhenomenon**](PhenomenonsApi.md#createPhenomenon) | **POST** /phenomenons | Create new phenomenon.
[**getPhenomenonById**](PhenomenonsApi.md#getPhenomenonById) | **GET** /phenomenons/{phenomenonId} | Get the phenomenon by id.
[**getPhenomenonStatistic**](PhenomenonsApi.md#getPhenomenonStatistic) | **GET** /phenomenons/{phenomenonId}/statistic | Get the phenomenon statistics.
[**getPhenomenons**](PhenomenonsApi.md#getPhenomenons) | **GET** /phenomenons | Get the phenomenon listing.

<a name="createPhenomenon"></a>
# **createPhenomenon**
> createPhenomenon(body)

Create new phenomenon.

Create new phenomenon.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.PhenomenonsApi();
let body = new EnviroCarRestApi.PhenomenonCreate(); // PhenomenonCreate | The phenomenon to create.

apiInstance.createPhenomenon(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PhenomenonCreate**](PhenomenonCreate.md)| The phenomenon to create. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenomenonById"></a>
# **getPhenomenonById**
> Phenomenon getPhenomenonById(phenomenonId)

Get the phenomenon by id.

Get the phenomenon by id.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.PhenomenonsApi();
let phenomenonId = "phenomenonId_example"; // String | The phenomenon id.

apiInstance.getPhenomenonById(phenomenonId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phenomenonId** | **String**| The phenomenon id. | 

### Return type

[**Phenomenon**](Phenomenon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getPhenomenonStatistic"></a>
# **getPhenomenonStatistic**
> Statistic getPhenomenonStatistic(phenomenonId)

Get the phenomenon statistics.

Get the phenomenon statistics.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.PhenomenonsApi();
let phenomenonId = "phenomenonId_example"; // String | The phenomenon id.

apiInstance.getPhenomenonStatistic(phenomenonId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phenomenonId** | **String**| The phenomenon id. | 

### Return type

[**Statistic**](Statistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getPhenomenons"></a>
# **getPhenomenons**
> Phenomenons getPhenomenons(opts)

Get the phenomenon listing.

Get the phenomenon listing.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.PhenomenonsApi();
let opts = { 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getPhenomenons(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Phenomenons**](Phenomenons.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

