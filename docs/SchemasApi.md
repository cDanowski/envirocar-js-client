# EnviroCarRestApi.SchemasApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchemaById**](SchemasApi.md#getSchemaById) | **GET** /schemas/{schemaId} | 
[**getSchemas**](SchemasApi.md#getSchemas) | **GET** /schemas | 

<a name="getSchemaById"></a>
# **getSchemaById**
> Schema getSchemaById(schemaId)



### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SchemasApi();
let schemaId = "schemaId_example"; // String | The schema id.

apiInstance.getSchemaById(schemaId, (error, data, response) => {
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
 **schemaId** | **String**| The schema id. | 

### Return type

[**Schema**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getSchemas"></a>
# **getSchemas**
> Schemas getSchemas()



### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.SchemasApi();
apiInstance.getSchemas((error, data, response) => {
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

[**Schemas**](Schemas.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

