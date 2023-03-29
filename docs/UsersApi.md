# EnviroCarRestApi.UsersApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFriend**](UsersApi.md#addFriend) | **POST** /users/{userId}/friends | Add a friend.
[**createFueling**](UsersApi.md#createFueling) | **POST** /users/{userId}/fuelings | Create a new fueling for the user.
[**createSensorForUser**](UsersApi.md#createSensorForUser) | **POST** /users/{userId}/sensors | Create a new Sensor.
[**createTrackForUser**](UsersApi.md#createTrackForUser) | **POST** /users/{userId}/tracks | Create a new track.
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create a new user.
[**createUserGroup**](UsersApi.md#createUserGroup) | **POST** /users/{userId}/groups | Create the user group.
[**declineRequest**](UsersApi.md#declineRequest) | **POST** /users/{userId}/friends/declineRequest | Decline friend request.
[**deleteFriend**](UsersApi.md#deleteFriend) | **DELETE** /users/{userId}/friends/{friendId} | Delete the friend.
[**deleteFueling**](UsersApi.md#deleteFueling) | **DELETE** /users/{userId}/fuelings/{fuelingId} | Delete the fueling for the user.
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userId} | Delete the user.
[**deleteUserGroup**](UsersApi.md#deleteUserGroup) | **DELETE** /users/{userId}/groups/{groupId} | Delete the group.
[**getAvatar**](UsersApi.md#getAvatar) | **GET** /users/{userId}/avatar | Get the avatar of the user.
[**getFriend**](UsersApi.md#getFriend) | **GET** /users/{userId}/friends/{friendId} | Get the friend.
[**getFriendActivities**](UsersApi.md#getFriendActivities) | **GET** /users/{userId}/friendActivities | Get the activities of the friend.
[**getFriendActivityById**](UsersApi.md#getFriendActivityById) | **GET** /users/{userId}/friendActivities/{activityId} | Get the activity of the friend.
[**getFriends**](UsersApi.md#getFriends) | **GET** /users/{userId}/friends | Get the friends.
[**getFueling**](UsersApi.md#getFueling) | **GET** /users/{userId}/fuelings/{fuelingId} | Get the fueling for the user.
[**getFuelings**](UsersApi.md#getFuelings) | **GET** /users/{userId}/fuelings | Get the fuelings for the user.
[**getIncomingFriendRequests**](UsersApi.md#getIncomingFriendRequests) | **GET** /users/{userId}/friends/incomingRequests | Get incoming friend requests.
[**getOutgoingFriendRequests**](UsersApi.md#getOutgoingFriendRequests) | **GET** /users/{userId}/friends/outgoingRequests | Get outgoing friend requests.
[**getSensorsOfUser**](UsersApi.md#getSensorsOfUser) | **GET** /users/{userId}/sensors | Get the Sensor listing.
[**getStatisticsOfUser**](UsersApi.md#getStatisticsOfUser) | **GET** /users/{userId}/statistics | Get the user statistics.
[**getTracksOfUser**](UsersApi.md#getTracksOfUser) | **GET** /users/{userId}/tracks | Get the list of tracks.
[**getUserActivities**](UsersApi.md#getUserActivities) | **GET** /users/{userId}/activities | Get the activities of the user.
[**getUserActivityById**](UsersApi.md#getUserActivityById) | **GET** /users/{userId}/activities/{activityId} | Get the activity of the user.
[**getUserById**](UsersApi.md#getUserById) | **GET** /users/{userId} | Get the user.
[**getUserGroup**](UsersApi.md#getUserGroup) | **GET** /users/{userId}/groups/{groupId} | Get the group of the user.
[**getUserGroups**](UsersApi.md#getUserGroups) | **GET** /users/{userId}/groups | Get the groups of the user.
[**getUserStatistics**](UsersApi.md#getUserStatistics) | **GET** /users/{userId}/userStatistic | Get the user statistics.
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get the users.
[**modifyUser**](UsersApi.md#modifyUser) | **PUT** /users/{userId} | Change the user.
[**modifyUserGroup**](UsersApi.md#modifyUserGroup) | **PUT** /users/{userId}/groups/{groupId} | Modify the group.

<a name="addFriend"></a>
# **addFriend**
> addFriend(body, userId)

Add a friend.

Add a friend.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.UserRef(); // UserRef | The user reference.
let userId = "userId_example"; // String | The user id.

apiInstance.addFriend(body, userId, (error, data, response) => {
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
 **body** | [**UserRef**](UserRef.md)| The user reference. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

<a name="createUser"></a>
# **createUser**
> createUser(body)

Create a new user.

Create a new user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.SensorCreate(); // SensorCreate | The sensor to create.

apiInstance.createUser(body, (error, data, response) => {
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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserGroup"></a>
# **createUserGroup**
> createUserGroup(body, userId)

Create the user group.

Create the user group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.GroupCreate(); // GroupCreate | The group to create.
let userId = "userId_example"; // String | The user id.

apiInstance.createUserGroup(body, userId, (error, data, response) => {
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
 **body** | [**GroupCreate**](GroupCreate.md)| The group to create. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="declineRequest"></a>
# **declineRequest**
> declineRequest(body, userId)

Decline friend request.

Decline friend request.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.UserRef(); // UserRef | The user reference.
let userId = "userId_example"; // String | The user id.

apiInstance.declineRequest(body, userId, (error, data, response) => {
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
 **body** | [**UserRef**](UserRef.md)| The user reference. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFriend"></a>
# **deleteFriend**
> deleteFriend(userId, friendId)

Delete the friend.

Delete the friend.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let friendId = "friendId_example"; // String | The friend id.

apiInstance.deleteFriend(userId, friendId, (error, data, response) => {
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
 **friendId** | **String**| The friend id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId, opts)

Delete the user.

Delete the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'deleteContent': false // Boolean | If the user created tracks and measurements also should be deleted.
};
apiInstance.deleteUser(userId, opts, (error, data, response) => {
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
 **deleteContent** | **Boolean**| If the user created tracks and measurements also should be deleted. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUserGroup"></a>
# **deleteUserGroup**
> deleteUserGroup(userId, groupId)

Delete the group.

Delete the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let groupId = "groupId_example"; // String | The group id.

apiInstance.deleteUserGroup(userId, groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAvatar"></a>
# **getAvatar**
> &#x27;Blob&#x27; getAvatar(userId)

Get the avatar of the user.

Get the avatar of the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getAvatar(userId, (error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json

<a name="getFriend"></a>
# **getFriend**
> User getFriend(userId, friendId)

Get the friend.

Get the friend.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let friendId = "friendId_example"; // String | The friend id.

apiInstance.getFriend(userId, friendId, (error, data, response) => {
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
 **friendId** | **String**| The friend id. | 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getFriendActivities"></a>
# **getFriendActivities**
> Activities getFriendActivities(userId, opts)

Get the activities of the friend.

Get the activities of the friend.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'type': "type_example", // String | The activity type.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getFriendActivities(userId, opts, (error, data, response) => {
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
 **type** | **String**| The activity type. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Activities**](Activities.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getFriendActivityById"></a>
# **getFriendActivityById**
> Activity getFriendActivityById(userId, activityId)

Get the activity of the friend.

Get the activity of the friend.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let activityId = "activityId_example"; // String | The activity id.

apiInstance.getFriendActivityById(userId, activityId, (error, data, response) => {
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
 **activityId** | **String**| The activity id. | 

### Return type

[**Activity**](Activity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getFriends"></a>
# **getFriends**
> Users getFriends(userId)

Get the friends.

Get the friends.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getFriends(userId, (error, data, response) => {
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

[**Users**](Users.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

<a name="getIncomingFriendRequests"></a>
# **getIncomingFriendRequests**
> Users getIncomingFriendRequests(userId)

Get incoming friend requests.

Get incoming friend requests.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getIncomingFriendRequests(userId, (error, data, response) => {
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

[**Users**](Users.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getOutgoingFriendRequests"></a>
# **getOutgoingFriendRequests**
> Users getOutgoingFriendRequests(userId)

Get outgoing friend requests.

Get outgoing friend requests.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getOutgoingFriendRequests(userId, (error, data, response) => {
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

[**Users**](Users.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

<a name="getUserActivities"></a>
# **getUserActivities**
> Activities getUserActivities(userId, opts)

Get the activities of the user.

Get the activities of the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'type': "type_example", // String | The activity type.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getUserActivities(userId, opts, (error, data, response) => {
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
 **type** | **String**| The activity type. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Activities**](Activities.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getUserActivityById"></a>
# **getUserActivityById**
> Activity getUserActivityById(userId, activityId)

Get the activity of the user.

Get the activity of the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let activityId = "activityId_example"; // String | The activity id.

apiInstance.getUserActivityById(userId, activityId, (error, data, response) => {
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
 **activityId** | **String**| The activity id. | 

### Return type

[**Activity**](Activity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getUserById"></a>
# **getUserById**
> User getUserById(userId)

Get the user.

Get the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.

apiInstance.getUserById(userId, (error, data, response) => {
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

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getUserGroup"></a>
# **getUserGroup**
> Group getUserGroup(userId, groupId)

Get the group of the user.

Get the group of the user

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let groupId = "groupId_example"; // String | The group id.

apiInstance.getUserGroup(userId, groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getUserGroups"></a>
# **getUserGroups**
> Groups getUserGroups(userId, opts)

Get the groups of the user.

Get the groups of the user

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let userId = "userId_example"; // String | The user id.
let opts = { 
  'q': "q_example", // String | The term to search for.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getUserGroups(userId, opts, (error, data, response) => {
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
 **q** | **String**| The term to search for. | [optional] 
 **limit** | **Number**| The number of entities per page. | [optional] [default to 100]
 **page** | **Number**| The page of entities to request. | [optional] [default to 1]
 **range** | [**Range**](.md)| The range of entities to request. | [optional] 

### Return type

[**Groups**](Groups.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

let apiInstance = new EnviroCarRestApi.UsersApi();
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

<a name="getUsers"></a>
# **getUsers**
> Users getUsers(opts)

Get the users.

Get the users.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let opts = { 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getUsers(opts, (error, data, response) => {
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

[**Users**](Users.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="modifyUser"></a>
# **modifyUser**
> modifyUser(body, userId)

Change the user.

Change the user.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.UserModify(); // UserModify | The user modifications.
let userId = "userId_example"; // String | The user id.

apiInstance.modifyUser(body, userId, (error, data, response) => {
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
 **body** | [**UserModify**](UserModify.md)| The user modifications. | 
 **userId** | **String**| The user id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyUserGroup"></a>
# **modifyUserGroup**
> modifyUserGroup(body, userId, groupId)

Modify the group.

Modify the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.UsersApi();
let body = new EnviroCarRestApi.GroupModify(); // GroupModify | The group modifications.
let userId = "userId_example"; // String | The user id.
let groupId = "groupId_example"; // String | The group id.

apiInstance.modifyUserGroup(body, userId, groupId, (error, data, response) => {
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
 **body** | [**GroupModify**](GroupModify.md)| The group modifications. | 
 **userId** | **String**| The user id. | 
 **groupId** | **String**| The group id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

