# EnviroCarRestApi.AnnouncementsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnnouncements**](AnnouncementsApi.md#getAnnouncements) | **GET** /announcements | Get the list of announcements.

<a name="getAnnouncements"></a>
# **getAnnouncements**
> Announcements getAnnouncements()

Get the list of announcements.

Get the list of announcements.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.AnnouncementsApi();
apiInstance.getAnnouncements((error, data, response) => {
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

[**Announcements**](Announcements.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

