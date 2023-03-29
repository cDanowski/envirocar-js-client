# EnviroCarRestApi.MeasurementsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrackMeasurement**](MeasurementsApi.md#addTrackMeasurement) | **POST** /tracks/{trackId}/measurements | Add a measurement to a track.
[**createMeasurement**](MeasurementsApi.md#createMeasurement) | **POST** /measurements | Create a new measurement.
[**createMeasurementForUser**](MeasurementsApi.md#createMeasurementForUser) | **POST** /users/{userId}/measurements | Create a new measurement.
[**deleteMeasurement**](MeasurementsApi.md#deleteMeasurement) | **DELETE** /measurements/{measurementId} | Delete a existing measurement.
[**getMeasurementById**](MeasurementsApi.md#getMeasurementById) | **GET** /measurements/{measurementId} | Get the specified measurement.
[**getMeasurementSensor**](MeasurementsApi.md#getMeasurementSensor) | **GET** /measurements/{measurementId}/sensor | Get the sensor of a measurement.
[**getMeasurements**](MeasurementsApi.md#getMeasurements) | **GET** /measurements | Get the list of measurements.
[**getMeasurementsOfUser**](MeasurementsApi.md#getMeasurementsOfUser) | **GET** /users/{userId}/measurements | Get the list of measurements.
[**getTrackMeasurements**](MeasurementsApi.md#getTrackMeasurements) | **GET** /tracks/{trackId}/measurements | Get the measurements of a track.

<a name="addTrackMeasurement"></a>
# **addTrackMeasurement**
> addTrackMeasurement(body, trackId)

Add a measurement to a track.

Add a measurement to a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let body = new EnviroCarRestApi.MeasurementCreate(); // MeasurementCreate | The measurement to create.
let trackId = "trackId_example"; // String | The track id.

apiInstance.addTrackMeasurement(body, trackId, (error, data, response) => {
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
 **body** | [**MeasurementCreate**](MeasurementCreate.md)| The measurement to create. | 
 **trackId** | **String**| The track id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMeasurement"></a>
# **createMeasurement**
> createMeasurement(body)

Create a new measurement.

Create a new measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let body = new EnviroCarRestApi.MeasurementCreate(); // MeasurementCreate | The measurement to create.

apiInstance.createMeasurement(body, (error, data, response) => {
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
 **body** | [**MeasurementCreate**](MeasurementCreate.md)| The measurement to create. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMeasurementForUser"></a>
# **createMeasurementForUser**
> createMeasurementForUser(body, userId)

Create a new measurement.

Create a new measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let body = new EnviroCarRestApi.MeasurementCreate(); // MeasurementCreate | The measurement to create.
let userId = "userId_example"; // String | The user id.

apiInstance.createMeasurementForUser(body, userId, (error, data, response) => {
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
 **body** | [**MeasurementCreate**](MeasurementCreate.md)| The measurement to create. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMeasurement"></a>
# **deleteMeasurement**
> deleteMeasurement(measurementId)

Delete a existing measurement.

Delete a existing measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let measurementId = "measurementId_example"; // String | The measurement id.

apiInstance.deleteMeasurement(measurementId, (error, data, response) => {
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
 **measurementId** | **String**| The measurement id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMeasurementById"></a>
# **getMeasurementById**
> Measurement getMeasurementById(measurementId)

Get the specified measurement.

Get the specified measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let measurementId = "measurementId_example"; // String | The measurement id.

apiInstance.getMeasurementById(measurementId, (error, data, response) => {
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

[**Measurement**](Measurement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getMeasurementSensor"></a>
# **getMeasurementSensor**
> Sensor getMeasurementSensor(measurementId)

Get the sensor of a measurement.

Get the sensor of a measurement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
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

<a name="getMeasurements"></a>
# **getMeasurements**
> Measurements getMeasurements(opts)

Get the list of measurements.

Get the list of measurements.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let opts = { 
  'bbox': [3.4], // [Number] | The bounding box the requested tracks have to intersect with.
  'nearPoint': [3.4], // [Number] | The point to which the distance can not fall below a certain threshold.
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
apiInstance.getMeasurements(opts, (error, data, response) => {
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
 **bbox** | [**[Number]**](Number.md)| The bounding box the requested tracks have to intersect with. | [optional] 
 **nearPoint** | [**[Number]**](Number.md)| The point to which the distance can not fall below a certain threshold. | [optional] 
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

[**Measurements**](Measurements.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getMeasurementsOfUser"></a>
# **getMeasurementsOfUser**
> Measurements getMeasurementsOfUser(userId, opts)

Get the list of measurements.

Get the list of measurements.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'bbox': [3.4], // [Number] | The bounding box the requested tracks have to intersect with.
  'nearPoint': [3.4], // [Number] | The point to which the distance can not fall below a certain threshold.
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
apiInstance.getMeasurementsOfUser(userId, opts, (error, data, response) => {
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
 **bbox** | [**[Number]**](Number.md)| The bounding box the requested tracks have to intersect with. | [optional] 
 **nearPoint** | [**[Number]**](Number.md)| The point to which the distance can not fall below a certain threshold. | [optional] 
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

[**Measurements**](Measurements.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTrackMeasurements"></a>
# **getTrackMeasurements**
> Measurements getTrackMeasurements(trackId, opts)

Get the measurements of a track.

Get the measurements of a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.MeasurementsApi();
let trackId = "trackId_example"; // String | The track id.
let opts = { 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getTrackMeasurements(trackId, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Measurements**](Measurements.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

