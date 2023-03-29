# EnviroCarRestApi.TermsApi

All URIs are relative to *https://envirocar.org/api/stable/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrivacyStatements**](TermsApi.md#getPrivacyStatements) | **GET** /privacyStatements | Get the list of privacy statements.
[**getPrivacyStatementsById**](TermsApi.md#getPrivacyStatementsById) | **GET** /privacyStatements/{privacyStatementId} | Get the privacy statement.
[**getTermsOfUse**](TermsApi.md#getTermsOfUse) | **GET** /termsOfUse | Get the list of terms of use.
[**getTermsOfUseById**](TermsApi.md#getTermsOfUseById) | **GET** /termsOfUse/{termsOfUseId} | Get the terms of use.

<a name="getPrivacyStatements"></a>
# **getPrivacyStatements**
> PrivacyStatements getPrivacyStatements()

Get the list of privacy statements.

Get the list of privacy statements.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TermsApi();
apiInstance.getPrivacyStatements((error, data, response) => {
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

[**PrivacyStatements**](PrivacyStatements.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getPrivacyStatementsById"></a>
# **getPrivacyStatementsById**
> PrivacyStatement getPrivacyStatementsById(privacyStatementId)

Get the privacy statement.

Get the privacy statement.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TermsApi();
let privacyStatementId = "privacyStatementId_example"; // String | The privacy statement id.

apiInstance.getPrivacyStatementsById(privacyStatementId, (error, data, response) => {
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
 **privacyStatementId** | **String**| The privacy statement id. | 

### Return type

[**PrivacyStatement**](PrivacyStatement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTermsOfUse"></a>
# **getTermsOfUse**
> TermsOfUse getTermsOfUse()

Get the list of terms of use.

Get the list of terms of use.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TermsApi();
apiInstance.getTermsOfUse((error, data, response) => {
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

[**TermsOfUse**](TermsOfUse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

<a name="getTermsOfUseById"></a>
# **getTermsOfUseById**
> TermsOfUseInstance getTermsOfUseById(termsOfUseId)

Get the terms of use.

Get the terms of use.

### Example
```javascript
import {EnviroCarRestApi} from 'enviro_car_rest_api';

let apiInstance = new EnviroCarRestApi.TermsApi();
let termsOfUseId = "termsOfUseId_example"; // String | The terms of use id.

apiInstance.getTermsOfUseById(termsOfUseId, (error, data, response) => {
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
 **termsOfUseId** | **String**| The terms of use id. | 

### Return type

[**TermsOfUseInstance**](TermsOfUseInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

