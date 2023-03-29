# EnviroCarRestApi.Schema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | [optional] 
**multipleOf** | **Number** |  | [optional] 
**maximum** | **Number** |  | [optional] 
**exclusiveMaximum** | **Boolean** |  | [optional] [default to false]
**minimum** | **Number** |  | [optional] 
**exclusiveMinimum** | **Boolean** |  | [optional] [default to false]
**maxLength** | **Number** |  | [optional] 
**minLength** | **Number** |  | [optional] [default to 0]
**pattern** | **String** |  | [optional] 
**maxItems** | **Number** |  | [optional] 
**minItems** | **Number** |  | [optional] [default to 0]
**uniqueItems** | **Boolean** |  | [optional] [default to false]
**maxProperties** | **Number** |  | [optional] 
**minProperties** | **Number** |  | [optional] [default to 0]
**required** | **[String]** |  | [optional] 
**_enum** | **[Object]** |  | [optional] 
**type** | **String** |  | [optional] 
**not** | **OneOfSchemaNot** |  | [optional] 
**allOf** | **[OneOfSchemaAllOfItems]** |  | [optional] 
**oneOf** | **[OneOfSchemaOneOfItems]** |  | [optional] 
**anyOf** | **[OneOfSchemaAnyOfItems]** |  | [optional] 
**items** | **OneOfSchemaItems** |  | [optional] 
**properties** | **{String: Object}** |  | [optional] 
**additionalProperties** | **OneOfSchemaAdditionalProperties** |  | [optional] 
**description** | **String** |  | [optional] 
**format** | **String** |  | [optional] 
**_default** | **Object** |  | [optional] 
**nullable** | **Boolean** |  | [optional] [default to false]
**discriminator** | [**Discriminator**](Discriminator.md) |  | [optional] 
**readOnly** | **Boolean** |  | [optional] [default to false]
**writeOnly** | **Boolean** |  | [optional] [default to false]
**example** | **Object** |  | [optional] 
**externalDocs** | [**ExternalDocumentation**](ExternalDocumentation.md) |  | [optional] 
**deprecated** | **Boolean** |  | [optional] [default to false]
**xml** | [**XML**](XML.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `_array` (value: `"array"`)
* `_boolean` (value: `"boolean"`)
* `integer` (value: `"integer"`)
* `_number` (value: `"number"`)
* `_object` (value: `"object"`)
* `_string` (value: `"string"`)

