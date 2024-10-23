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
 * @interface ChainflipBaasBalanceBalanceResponse
 */
export interface ChainflipBaasBalanceBalanceResponse {
    /**
     * Current FLIP balance
     * @type {number}
     * @memberof ChainflipBaasBalanceBalanceResponse
     */
    readonly currentBalance?: number;
    /**
     * Current FLIP balance in flipperinos.
     * @type {string}
     * @memberof ChainflipBaasBalanceBalanceResponse
     */
    readonly currentBalanceNative?: string;
}

/**
 * Check if a given object implements the ChainflipBaasBalanceBalanceResponse interface.
 */
export function instanceOfChainflipBaasBalanceBalanceResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasBalanceBalanceResponseFromJSON(json: any): ChainflipBaasBalanceBalanceResponse {
    return ChainflipBaasBalanceBalanceResponseFromJSONTyped(json, false);
}

export function ChainflipBaasBalanceBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasBalanceBalanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentBalance': !exists(json, 'currentBalance') ? undefined : json['currentBalance'],
        'currentBalanceNative': !exists(json, 'currentBalanceNative') ? undefined : json['currentBalanceNative'],
    };
}

export function ChainflipBaasBalanceBalanceResponseToJSON(value?: ChainflipBaasBalanceBalanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
