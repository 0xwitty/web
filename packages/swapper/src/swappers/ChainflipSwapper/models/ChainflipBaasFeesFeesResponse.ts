// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Chainflip Broker as a Service
 * Run your own Chainflip Broker without any hassle.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChainflipBaasFeesFeesResponse
 */
export interface ChainflipBaasFeesFeesResponse {
    /**
     * Earned broker fees per asset.
     * @type {{ [key: string]: number; }}
     * @memberof ChainflipBaasFeesFeesResponse
     */
    readonly earnedFees?: { [key: string]: number; };
    /**
     * Earned broker fees per asset in native units.
     * @type {{ [key: string]: string; }}
     * @memberof ChainflipBaasFeesFeesResponse
     */
    readonly earnedFeesNative?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ChainflipBaasFeesFeesResponse interface.
 */
export function instanceOfChainflipBaasFeesFeesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasFeesFeesResponseFromJSON(json: any): ChainflipBaasFeesFeesResponse {
    return ChainflipBaasFeesFeesResponseFromJSONTyped(json, false);
}

export function ChainflipBaasFeesFeesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasFeesFeesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'earnedFees': !exists(json, 'earnedFees') ? undefined : json['earnedFees'],
        'earnedFeesNative': !exists(json, 'earnedFeesNative') ? undefined : json['earnedFeesNative'],
    };
}

export function ChainflipBaasFeesFeesResponseToJSON(value?: ChainflipBaasFeesFeesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
