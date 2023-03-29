# EnviroCarRestApi.StatisticsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPhenomenonStatistic**](StatisticsApi.md#getPhenomenonStatistic) | **GET** /phenomenons/{phenomenonId}/statistic | Get the phenomenon statistics.
[**getSensorStatistics**](StatisticsApi.md#getSensorStatistics) | **GET** /sensors/{sensorId}/statistics | Get the Sensor statistics.
[**getStatisticsOfUser**](StatisticsApi.md#getStatisticsOfUser) | **GET** /users/{userId}/statistics | Get the user statistics.
[**getTrackStatistics**](StatisticsApi.md#getTrackStatistics) | **GET** /tracks/{trackId}/statistics | Get the statistics of a track.
[**getUserStatistics**](StatisticsApi.md#getUserStatistics) | **GET** /users/{userId}/userStatistic | Get the user statistics.

<a name="getPhenomenonStatistic"></a>
# **getPhenomenonStatistic**
> Statistic getPhenomenonStatistic(phenomenonId)

Get the phenomenon statistics.

Get the phenomenon statistics.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.StatisticsApi();
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

<a name="getSensorStatistics"></a>
# **getSensorStatistics**
> Statistics getSensorStatistics(sensorId)

Get the Sensor statistics.

Get the Sensor statistics.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.StatisticsApi();
let sensorId = "sensorId_example"; // String | The Sensor id.

apiInstance.getSensorStatistics(sensorId, (error, data, response) => {
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
 **sensorId** | **String**| The Sensor id. | 

### Return type

[**Statistics**](Statistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getStatisticsOfUser"></a>
# **getStatisticsOfUser**
> Statistics getStatisticsOfUser(userId)

Get the user statistics.

Get the user statistics.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.StatisticsApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getStatisticsOfUser(userId, (error, data, response) => {
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

### Return type

[**Statistics**](Statistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTrackStatistics"></a>
# **getTrackStatistics**
> Statistics getTrackStatistics(trackId)

Get the statistics of a track.

Get the statistics of a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.StatisticsApi();
let trackId = "trackId_example"; // String | The track id.

apiInstance.getTrackStatistics(trackId, (error, data, response) => {
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
 **trackId** | **String**| The track id. | 

### Return type

[**Statistics**](Statistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getUserStatistics"></a>
# **getUserStatistics**
> UserStatistic getUserStatistics(userId)

Get the user statistics.

Get the user statistics.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.StatisticsApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getUserStatistics(userId, (error, data, response) => {
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

### Return type

[**UserStatistic**](UserStatistic.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

