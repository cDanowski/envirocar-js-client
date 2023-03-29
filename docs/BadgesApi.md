# EnviroCarRestApi.BadgesApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBadges**](BadgesApi.md#getBadges) | **GET** /badges | Get the list of badges.

<a name="getBadges"></a>
# **getBadges**
> Badges getBadges()

Get the list of badges.

Get the list of badges.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.BadgesApi();
apiInstance.getBadges((error, data, response) => {
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

[**Badges**](Badges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

