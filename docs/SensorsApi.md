# EnviroCarRestApi.SensorsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSensor**](SensorsApi.md#createSensor) | **POST** /sensors | Create a new Sensor.
[**createSensorForUser**](SensorsApi.md#createSensorForUser) | **POST** /users/{userId}/sensors | Create a new Sensor.
[**getMeasurementSensor**](SensorsApi.md#getMeasurementSensor) | **GET** /measurements/{measurementId}/sensor | Get the sensor of a measurement.
[**getSensorById**](SensorsApi.md#getSensorById) | **GET** /sensors/{sensorId} | Get the Sensor by id.
[**getSensorStatistics**](SensorsApi.md#getSensorStatistics) | **GET** /sensors/{sensorId}/statistics | Get the Sensor statistics.
[**getSensors**](SensorsApi.md#getSensors) | **GET** /sensors | Get the Sensor listing.
[**getSensorsOfUser**](SensorsApi.md#getSensorsOfUser) | **GET** /users/{userId}/sensors | Get the Sensor listing.
[**getTrackSensor**](SensorsApi.md#getTrackSensor) | **GET** /tracks/{trackId}/sensor | Get the sensor of a track.

<a name="createSensor"></a>
# **createSensor**
> createSensor(body)

Create a new Sensor.

Create a new Sensor.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let body = new EnviroCarRestApi.SensorCreate(); // SensorCreate | The sensor to create.

apiInstance.createSensor(body, (error, data, response) => {
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
 **body** | [**SensorCreate**](SensorCreate.md)| The sensor to create. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSensorForUser"></a>
# **createSensorForUser**
> createSensorForUser(body, userId)

Create a new Sensor.

Create a new Sensor.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let body = new EnviroCarRestApi.SensorCreate(); // SensorCreate | The sensor to create.
let userId = "userId_example"; // String | The user id.

apiInstance.createSensorForUser(body, userId, (error, data, response) => {
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
 **body** | [**SensorCreate**](SensorCreate.md)| The sensor to create. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMeasurementSensor"></a>
# **getMeasurementSensor**
> Sensor getMeasurementSensor(measurementId)

Get the sensor of a measurement.

Get the sensor of a measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let measurementId = "measurementId_example"; // String | The measurement id.

apiInstance.getMeasurementSensor(measurementId, (error, data, response) => {
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
 **measurementId** | **String**| The measurement id. | 

### Return type

[**Sensor**](Sensor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getSensorById"></a>
# **getSensorById**
> Sensor getSensorById(sensorId)

Get the Sensor by id.

Get the Sensor by id.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let sensorId = "sensorId_example"; // String | The Sensor id.

apiInstance.getSensorById(sensorId, (error, data, response) => {
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

[**Sensor**](Sensor.md)

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

let apiInstance = new EnviroCarRestApi.SensorsApi();
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

<a name="getSensors"></a>
# **getSensors**
> Sensors getSensors(opts)

Get the Sensor listing.

Get the Sensor listing.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let opts = { 
  'type': "type_example", // String | The Sensor type.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getSensors(opts, (error, data, response) => {
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
 **type** | **String**| The Sensor type. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Sensors**](Sensors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getSensorsOfUser"></a>
# **getSensorsOfUser**
> Sensors getSensorsOfUser(userId, opts)

Get the Sensor listing.

Get the Sensor listing.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'type': "type_example", // String | The Sensor type.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getSensorsOfUser(userId, opts, (error, data, response) => {
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
 **type** | **String**| The Sensor type. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Sensors**](Sensors.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTrackSensor"></a>
# **getTrackSensor**
> Sensor getTrackSensor(trackId)

Get the sensor of a track.

Get the sensor of a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SensorsApi();
let trackId = "trackId_example"; // String | The track id.

apiInstance.getTrackSensor(trackId, (error, data, response) => {
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

[**Sensor**](Sensor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

