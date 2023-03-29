# EnviroCarRestApi.TracksApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrackMeasurement**](TracksApi.md#addTrackMeasurement) | **POST** /tracks/{trackId}/measurements | Add a measurement to a track.
[**createTrack**](TracksApi.md#createTrack) | **POST** /tracks | Create a new track.
[**createTrackForUser**](TracksApi.md#createTrackForUser) | **POST** /users/{userId}/tracks | Create a new track.
[**deleteTrack**](TracksApi.md#deleteTrack) | **DELETE** /tracks/{trackId} | Delete the specified track.
[**getTrackById**](TracksApi.md#getTrackById) | **GET** /tracks/{trackId} | Get the specified track.
[**getTrackMeasurements**](TracksApi.md#getTrackMeasurements) | **GET** /tracks/{trackId}/measurements | Get the measurements of a track.
[**getTrackSensor**](TracksApi.md#getTrackSensor) | **GET** /tracks/{trackId}/sensor | Get the sensor of a track.
[**getTrackStatistics**](TracksApi.md#getTrackStatistics) | **GET** /tracks/{trackId}/statistics | Get the statistics of a track.
[**getTracks**](TracksApi.md#getTracks) | **GET** /tracks | Get the list of tracks.
[**getTracksOfUser**](TracksApi.md#getTracksOfUser) | **GET** /users/{userId}/tracks | Get the list of tracks.
[**modifyTrack**](TracksApi.md#modifyTrack) | **PUT** /tracks/{trackId} | Update the specified track.
[**previewTrack**](TracksApi.md#previewTrack) | **GET** /tracks/{trackId}/preview | Get the preview image of the track.
[**shareTrack**](TracksApi.md#shareTrack) | **GET** /tracks/{trackId}/share | Get the share link of the track.

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

let apiInstance = new EnviroCarRestApi.TracksApi();
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

<a name="createTrack"></a>
# **createTrack**
> createTrack(body)

Create a new track.

Create a new track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.TracksApi();
let body = new EnviroCarRestApi.TrackCreate(); // TrackCreate | The track to create.

apiInstance.createTrack(body, (error, data, response) => {
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
 **body** | [**TrackCreate**](TrackCreate.md)| The track to create. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTrackForUser"></a>
# **createTrackForUser**
> createTrackForUser(body, userId)

Create a new track.

Create a new track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.TracksApi();
let body = new EnviroCarRestApi.TrackCreate(); // TrackCreate | The track to create.
let userId = "userId_example"; // String | The user id.

apiInstance.createTrackForUser(body, userId, (error, data, response) => {
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
 **body** | [**TrackCreate**](TrackCreate.md)| The track to create. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTrack"></a>
# **deleteTrack**
> deleteTrack(trackId)

Delete the specified track.

Delete the specified track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.TracksApi();
let trackId = "trackId_example"; // String | The track id.

apiInstance.deleteTrack(trackId, (error, data, response) => {
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
 **trackId** | **String**| The track id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackById"></a>
# **getTrackById**
> Track getTrackById(trackId)

Get the specified track.

Get the specified track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
let trackId = "trackId_example"; // String | The track id.

apiInstance.getTrackById(trackId, (error, data, response) => {
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

[**Track**](Track.md)

### Authorization

No authorization required

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

let apiInstance = new EnviroCarRestApi.TracksApi();
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

<a name="getTrackSensor"></a>
# **getTrackSensor**
> Sensor getTrackSensor(trackId)

Get the sensor of a track.

Get the sensor of a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
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

<a name="getTrackStatistics"></a>
# **getTrackStatistics**
> Statistics getTrackStatistics(trackId)

Get the statistics of a track.

Get the statistics of a track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
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

<a name="getTracks"></a>
# **getTracks**
> Tracks getTracks(opts)

Get the list of tracks.

Get the list of tracks.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
let opts = { 
  'bbox': [3.4], // [Number] | The bounding box the requested tracks have to intersect with.
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
  'status': new EnviroCarRestApi.TrackStatus(), // TrackStatus | 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getTracks(opts, (error, data, response) => {
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
 **status** | [**TrackStatus**](.md)|  | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Tracks**](Tracks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTracksOfUser"></a>
# **getTracksOfUser**
> Tracks getTracksOfUser(userId, opts)

Get the list of tracks.

Get the list of tracks.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.TracksApi();
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
  'status': new EnviroCarRestApi.TrackStatus(), // TrackStatus | 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getTracksOfUser(userId, opts, (error, data, response) => {
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
 **status** | [**TrackStatus**](.md)|  | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Tracks**](Tracks.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="modifyTrack"></a>
# **modifyTrack**
> modifyTrack(body, trackId)

Update the specified track.

Update the specified track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.TracksApi();
let body = new EnviroCarRestApi.TrackModify(); // TrackModify | The track modifications.
let trackId = "trackId_example"; // String | The track id.

apiInstance.modifyTrack(body, trackId, (error, data, response) => {
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
 **body** | [**TrackModify**](TrackModify.md)| The track modifications. | 
 **trackId** | **String**| The track id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="previewTrack"></a>
# **previewTrack**
> &#x27;Blob&#x27; previewTrack(trackId)

Get the preview image of the track.

Get the preview image of the track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
let trackId = "trackId_example"; // String | The track id.

apiInstance.previewTrack(trackId, (error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

<a name="shareTrack"></a>
# **shareTrack**
> &#x27;Blob&#x27; shareTrack(trackId, opts)

Get the share link of the track.

Get the share link of the track.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TracksApi();
let trackId = "trackId_example"; // String | The track id.
let opts = { 
  'locale': "locale_example" // String | 
};
apiInstance.shareTrack(trackId, opts, (error, data, response) => {
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
 **locale** | **String**|  | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

