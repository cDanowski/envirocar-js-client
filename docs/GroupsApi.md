# EnviroCarRestApi.GroupsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupMember**](GroupsApi.md#addGroupMember) | **POST** /groups/{groupId}/members | Add the group member.
[**createGroup**](GroupsApi.md#createGroup) | **POST** /groups | Create the group.
[**createUserGroup**](GroupsApi.md#createUserGroup) | **POST** /users/{userId}/groups | Create the user group.
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete the group.
[**deleteUserGroup**](GroupsApi.md#deleteUserGroup) | **DELETE** /users/{userId}/groups/{groupId} | Delete the group.
[**getGroup**](GroupsApi.md#getGroup) | **GET** /groups/{groupId} | Get the group.
[**getGroupActivities**](GroupsApi.md#getGroupActivities) | **GET** /groups/{groupId}/activities | Get the activities of the group.
[**getGroupActivityById**](GroupsApi.md#getGroupActivityById) | **GET** /groups/{groupId}/activities/{activityId} | Get the activity of the group.
[**getGroupMember**](GroupsApi.md#getGroupMember) | **GET** /groups/{groupId}/members/{memberId} | Get the group member.
[**getGroupMembers**](GroupsApi.md#getGroupMembers) | **GET** /groups/{groupId}/members | Get the group members.
[**getGroups**](GroupsApi.md#getGroups) | **GET** /groups | Get the groups.
[**getUserGroup**](GroupsApi.md#getUserGroup) | **GET** /users/{userId}/groups/{groupId} | Get the group of the user.
[**getUserGroups**](GroupsApi.md#getUserGroups) | **GET** /users/{userId}/groups | Get the groups of the user.
[**modifyGroup**](GroupsApi.md#modifyGroup) | **PUT** /groups/{groupId} | Modify the group.
[**modifyUserGroup**](GroupsApi.md#modifyUserGroup) | **PUT** /users/{userId}/groups/{groupId} | Modify the group.
[**removeGroupMember**](GroupsApi.md#removeGroupMember) | **DELETE** /groups/{groupId}/members/{memberId} | Remove the user from the group.

<a name="addGroupMember"></a>
# **addGroupMember**
> addGroupMember(body, groupId)

Add the group member.

Add the group member.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let body = new EnviroCarRestApi.UserRef(); // UserRef | The user reference.
let groupId = "groupId_example"; // String | The group id.

apiInstance.addGroupMember(body, groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroup"></a>
# **createGroup**
> createGroup(body)

Create the group.

Create the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let body = new EnviroCarRestApi.GroupCreate(); // GroupCreate | The group to create.

apiInstance.createGroup(body, (error, data, response) => {
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

let apiInstance = new EnviroCarRestApi.GroupsApi();
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

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId)

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

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.

apiInstance.deleteGroup(groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

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

let apiInstance = new EnviroCarRestApi.GroupsApi();
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

<a name="getGroup"></a>
# **getGroup**
> Group getGroup(groupId)

Get the group.

Get the group

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.

apiInstance.getGroup(groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getGroupActivities"></a>
# **getGroupActivities**
> Activities getGroupActivities(groupId, opts)

Get the activities of the group.

Get the activities of the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.
let opts = { 
  'type': "type_example", // String | The activity type.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getGroupActivities(groupId, opts, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 
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

<a name="getGroupActivityById"></a>
# **getGroupActivityById**
> Activity getGroupActivityById(groupId, activityId)

Get the activity of the group.

Get the activity of the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.
let activityId = "activityId_example"; // String | The activity id.

apiInstance.getGroupActivityById(groupId, activityId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 
 **activityId** | **String**| The activity id. | 

### Return type

[**Activity**](Activity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getGroupMember"></a>
# **getGroupMember**
> User getGroupMember(groupId, memberId)

Get the group member.

Get the group member.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.
let memberId = "memberId_example"; // String | The member id.

apiInstance.getGroupMember(groupId, memberId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 
 **memberId** | **String**| The member id. | 

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getGroupMembers"></a>
# **getGroupMembers**
> Users getGroupMembers(groupId, opts)

Get the group members.

Get the group members.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.
let opts = { 
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getGroupMembers(groupId, opts, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 
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

<a name="getGroups"></a>
# **getGroups**
> Groups getGroups(opts)

Get the groups.

Get the groups.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let opts = { 
  'q': "q_example", // String | The term to search for.
  'limit': 100, // Number | The number of entities per page.
  'page': 1, // Number | The page of entities to request.
  'range': new EnviroCarRestApi.Range() // Range | The range of entities to request.
};
apiInstance.getGroups(opts, (error, data, response) => {
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

let apiInstance = new EnviroCarRestApi.GroupsApi();
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

let apiInstance = new EnviroCarRestApi.GroupsApi();
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

<a name="modifyGroup"></a>
# **modifyGroup**
> modifyGroup(body, groupId)

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

let apiInstance = new EnviroCarRestApi.GroupsApi();
let body = new EnviroCarRestApi.GroupModify(); // GroupModify | The group modifications.
let groupId = "groupId_example"; // String | The group id.

apiInstance.modifyGroup(body, groupId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 

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

let apiInstance = new EnviroCarRestApi.GroupsApi();
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

<a name="removeGroupMember"></a>
# **removeGroupMember**
> removeGroupMember(groupId, memberId)

Remove the user from the group.

Remove the user from the group.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';
let defaultClient = EnviroCarRestApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new EnviroCarRestApi.GroupsApi();
let groupId = "groupId_example"; // String | The group id.
let memberId = "memberId_example"; // String | The member id.

apiInstance.removeGroupMember(groupId, memberId, (error, data, response) => {
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
 **groupId** | **String**| The group id. | 
 **memberId** | **String**| The member id. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

