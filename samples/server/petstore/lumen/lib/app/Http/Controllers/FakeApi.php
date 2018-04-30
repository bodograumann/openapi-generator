<?php

/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

class FakeApi extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation testClientModel
     *
     * To test \"client\" model.
     *
     *
     * @return Http response
     */
    public function testClientModel()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['client'])) {
            throw new \InvalidArgumentException('Missing the required parameter $client when calling testClientModel');
        }
        $client = $input['client'];


        return response('How about implementing testClientModel as a patch method ?');
    }
    /**
     * Operation testEndpointParameters
     *
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 .
     *
     *
     * @return Http response
     */
    public function testEndpointParameters()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['number'])) {
            throw new \InvalidArgumentException('Missing the required parameter $number when calling testEndpointParameters');
        }
        if ($input['number'] > 543.2) {
            throw new \InvalidArgumentException('invalid value for $number when calling FakeApi.testEndpointParameters, must be smaller than or equal to 543.2.');
        }
        if ($input['number'] < 32.1) {
            throw new \InvalidArgumentException('invalid value for $number when calling FakeApi.testEndpointParameters, must be bigger than or equal to 32.1.');
        }
        $number = $input['number'];

        if (!isset($input['double'])) {
            throw new \InvalidArgumentException('Missing the required parameter $double when calling testEndpointParameters');
        }
        if ($input['double'] > 123.4) {
            throw new \InvalidArgumentException('invalid value for $double when calling FakeApi.testEndpointParameters, must be smaller than or equal to 123.4.');
        }
        if ($input['double'] < 67.8) {
            throw new \InvalidArgumentException('invalid value for $double when calling FakeApi.testEndpointParameters, must be bigger than or equal to 67.8.');
        }
        $double = $input['double'];

        if (!isset($input['pattern_without_delimiter'])) {
            throw new \InvalidArgumentException('Missing the required parameter $pattern_without_delimiter when calling testEndpointParameters');
        }
        $pattern_without_delimiter = $input['pattern_without_delimiter'];

        if (!isset($input['byte'])) {
            throw new \InvalidArgumentException('Missing the required parameter $byte when calling testEndpointParameters');
        }
        $byte = $input['byte'];

        if ($input['integer'] > 100) {
            throw new \InvalidArgumentException('invalid value for $integer when calling FakeApi.testEndpointParameters, must be smaller than or equal to 100.');
        }
        if ($input['integer'] < 10) {
            throw new \InvalidArgumentException('invalid value for $integer when calling FakeApi.testEndpointParameters, must be bigger than or equal to 10.');
        }
        $integer = $input['integer'];

        if ($input['int32'] > 200) {
            throw new \InvalidArgumentException('invalid value for $int32 when calling FakeApi.testEndpointParameters, must be smaller than or equal to 200.');
        }
        if ($input['int32'] < 20) {
            throw new \InvalidArgumentException('invalid value for $int32 when calling FakeApi.testEndpointParameters, must be bigger than or equal to 20.');
        }
        $int32 = $input['int32'];

        $int64 = $input['int64'];

        if ($input['float'] > 987.6) {
            throw new \InvalidArgumentException('invalid value for $float when calling FakeApi.testEndpointParameters, must be smaller than or equal to 987.6.');
        }
        $float = $input['float'];

        $string = $input['string'];

        $binary = $input['binary'];

        $date = $input['date'];

        $date_time = $input['date_time'];

        if (strlen($input['password']) > 64) {
            throw new \InvalidArgumentException('invalid length for $password when calling FakeApi.testEndpointParameters, must be smaller than or equal to 64.');
        }
        if (strlen($input['password']) < 10) {
            throw new \InvalidArgumentException('invalid length for $password when calling FakeApi.testEndpointParameters, must be bigger than or equal to 10.');
        }
        $password = $input['password'];

        $callback = $input['callback'];


        return response('How about implementing testEndpointParameters as a post method ?');
    }
    /**
     * Operation testEnumParameters
     *
     * To test enum parameters.
     *
     *
     * @return Http response
     */
    public function testEnumParameters()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $enum_header_string_array = $input['enum_header_string_array'];

        $enum_header_string = $input['enum_header_string'];

        $enum_query_string_array = $input['enum_query_string_array'];

        $enum_query_string = $input['enum_query_string'];

        $enum_query_integer = $input['enum_query_integer'];

        $enum_query_double = $input['enum_query_double'];

        $enum_form_string_array = $input['enum_form_string_array'];

        $enum_form_string = $input['enum_form_string'];


        return response('How about implementing testEnumParameters as a get method ?');
    }
    /**
     * Operation testInlineAdditionalProperties
     *
     * test inline additionalProperties.
     *
     *
     * @return Http response
     */
    public function testInlineAdditionalProperties()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['UNKNOWN_PARAM_NAME'])) {
            throw new \InvalidArgumentException('Missing the required parameter $UNKNOWN_PARAM_NAME when calling testInlineAdditionalProperties');
        }
        $UNKNOWN_PARAM_NAME = $input['UNKNOWN_PARAM_NAME'];


        return response('How about implementing testInlineAdditionalProperties as a post method ?');
    }
    /**
     * Operation testJsonFormData
     *
     * test json serialization of form data.
     *
     *
     * @return Http response
     */
    public function testJsonFormData()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        if (!isset($input['param'])) {
            throw new \InvalidArgumentException('Missing the required parameter $param when calling testJsonFormData');
        }
        $param = $input['param'];

        if (!isset($input['param2'])) {
            throw new \InvalidArgumentException('Missing the required parameter $param2 when calling testJsonFormData');
        }
        $param2 = $input['param2'];


        return response('How about implementing testJsonFormData as a get method ?');
    }
    /**
     * Operation fakeOuterBooleanSerialize
     *
     * .
     *
     *
     * @return Http response
     */
    public function fakeOuterBooleanSerialize()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing fakeOuterBooleanSerialize as a post method ?');
    }
    /**
     * Operation fakeOuterCompositeSerialize
     *
     * .
     *
     *
     * @return Http response
     */
    public function fakeOuterCompositeSerialize()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $outer_composite = $input['outer_composite'];


        return response('How about implementing fakeOuterCompositeSerialize as a post method ?');
    }
    /**
     * Operation fakeOuterNumberSerialize
     *
     * .
     *
     *
     * @return Http response
     */
    public function fakeOuterNumberSerialize()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing fakeOuterNumberSerialize as a post method ?');
    }
    /**
     * Operation fakeOuterStringSerialize
     *
     * .
     *
     *
     * @return Http response
     */
    public function fakeOuterStringSerialize()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing fakeOuterStringSerialize as a post method ?');
    }
}
