// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Order } from '../models/Order';

/**
 * no description
 */
export class StoreApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     * @param orderId ID of the order that needs to be deleted
     */
    public deleteOrder(orderId: string, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError('Required parameter orderId was null or undefined when calling deleteOrder.');
        }

		
		// Path Params
    	const localVarPath = '/store/order/{orderId}'
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    public getInventory(options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/store/inventory';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
		let authMethod = null;
    	// Apply auth methods
    	authMethod = config.authMethods["api_key"]
    	if (authMethod) {
    		authMethod.applySecurityAuthentication(requestContext);
    	}
    	
    	return requestContext;
    }
			
    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     * @param orderId ID of pet that needs to be fetched
     */
    public getOrderById(orderId: number, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError('Required parameter orderId was null or undefined when calling getOrderById.');
        }

		
		// Path Params
    	const localVarPath = '/store/order/{orderId}'
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    /**
     * Place an order for a pet
     * @param body order placed for purchasing the pet
     */
    public placeOrder(body: Order, options?: Configuration): RequestContext {
		let config = options || this.configuration;
		
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling placeOrder.');
        }

		
		// Path Params
    	const localVarPath = '/store/order';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Order", ""),
            contentType
        );
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
}



export class StoreApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    public deleteOrder(response: ResponseContext):   void  {      
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid ID supplied");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Order not found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInventory
     * @throws ApiException if the response code was not in [200, 299]
     */
    public getInventory(response: ResponseContext):  { [key: string]: number; }  {      
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            let body: { [key: string]: number; };
            if ("{ [key: string]: number; }" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as { [key: string]: number; };
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "{ [key: string]: number; }", "int32"
                ) as { [key: string]: number; };
            }
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            let body: { [key: string]: number; };
            if ("{ [key: string]: number; }" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as { [key: string]: number; };
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "{ [key: string]: number; }", "int32"
                ) as { [key: string]: number; };
            }
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrderById
     * @throws ApiException if the response code was not in [200, 299]
     */
    public getOrderById(response: ResponseContext):  Order  {      
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            let body: Order;
            if ("Order" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as Order;
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "Order", ""
                ) as Order;
            }
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid ID supplied");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Order not found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            let body: Order;
            if ("Order" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as Order;
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "Order", ""
                ) as Order;
            }
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to placeOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    public placeOrder(response: ResponseContext):  Order  {      
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            let body: Order;
            if ("Order" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as Order;
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "Order", ""
                ) as Order;
            }
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Invalid Order");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            let body: Order;
            if ("Order" as string === "HttpFile" as string) {
                body = response.getBodyAsFile() as any as Order;
            } else {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(response.body, contentType),
                    "Order", ""
                ) as Order;
            }
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
