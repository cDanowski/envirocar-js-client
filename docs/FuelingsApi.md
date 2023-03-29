# EnviroCarRestApi.FuelingsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFueling**](FuelingsApi.md#createFueling) | **POST** /users/{userId}/fuelings | Create a new fueling for the user.
[**deleteFueling**](FuelingsApi.md#deleteFueling) | **DELETE** /users/{userId}/fuelings/{fuelingId} | Delete the fueling for the user.
[**getFueling**](FuelingsApi.md#getFueling) | **GET** /users/{userId}/fuelings/{fuelingId} | Get the fueling for the user.
[**getFuelings**](FuelingsApi.md#getFuelings) | **GET** /users/{userId}/fuelings | Get the fuelings for the user.

<a name="createFueling"></a>
# **createFueling**
> createFueling(body, userId)

Create a new fueling for the user.

Create a new fueling for the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.FuelingsApi();
let body = new EnviroCarRestApi.FuelingCreate(); // FuelingCreate | The fueling to create.
let userId = "userId_example"; // String | The user id.

apiInstance.createFueling(body, userId, (error, data, response) => {
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
 **body** | [**FuelingCreate**](FuelingCreate.md)| The fueling to create. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFueling"></a>
# **deleteFueling**
> deleteFueling(userId, fuelingId)

Delete the fueling for the user.

Delete the fueling for the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.FuelingsApi();
let userId = "userId_example"; // String | The user id.
let fuelingId = "fuelingId_example"; // String | The fueling id.

apiInstance.deleteFueling(userId, fuelingId, (error, data, response) => {
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
 **userId** | **String**| The user id. | 
 **fuelingId** | **String**| The fueling id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFueling"></a>
# **getFueling**
> Fueling getFueling(userId, fuelingId)

Get the fueling for the user.

Get the fueling for the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.FuelingsApi();
let userId = "userId_example"; // String | The user id.
let fuelingId = "fuelingId_example"; // String | The fueling id.

apiInstance.getFueling(userId, fuelingId, (error, data, response) => {
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
 **userId** | **String**| The user id. | 
 **fuelingId** | **String**| The fueling id. | 

### Return type

[**Fueling**](Fueling.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getFuelings"></a>
# **getFuelings**
> Fuelings getFuelings(userId, opts)

Get the fuelings for the user.

Get the fuelings for the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.FuelingsApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'after': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `after` operator.
  'before': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `before` operator.
  'begins': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `begins` operator.
  'begunBy': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `begunBy` operator.
  'contains': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `contains` operator.
  'during': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `during` operator.
  'endedBy': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `endedBy` operator.
  'ends': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `ends` operator.
  'equals': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `equals` operator.
  'meets': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `meets` operator.
  'metBy': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `metBy` operator.
  'overlapped': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `overlapped` operator.
  'overlaps': new EnviroCarRestApi.TemporalFilter(), // TemporalFilter | The time instant or interval to be applied with the `overlaps` operator.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getFuelings(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user id. | 
 **after** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;after&#x60; operator. | [optional] 
 **before** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;before&#x60; operator. | [optional] 
 **begins** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;begins&#x60; operator. | [optional] 
 **begunBy** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;begunBy&#x60; operator. | [optional] 
 **contains** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;contains&#x60; operator. | [optional] 
 **during** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;during&#x60; operator. | [optional] 
 **endedBy** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;endedBy&#x60; operator. | [optional] 
 **ends** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;ends&#x60; operator. | [optional] 
 **equals** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;equals&#x60; operator. | [optional] 
 **meets** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;meets&#x60; operator. | [optional] 
 **metBy** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;metBy&#x60; operator. | [optional] 
 **overlapped** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;overlapped&#x60; operator. | [optional] 
 **overlaps** | [**TemporalFilter**](.md)| The time instant or interval to be applied with the &#x60;overlaps&#x60; operator. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Fuelings**](Fuelings.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

