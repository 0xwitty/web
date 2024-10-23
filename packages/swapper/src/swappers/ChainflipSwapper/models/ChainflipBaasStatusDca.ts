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
import type { ChainflipBaasStatusChunkInfo } from './ChainflipBaasStatusChunkInfo';
import {
    ChainflipBaasStatusChunkInfoFromJSON,
    ChainflipBaasStatusChunkInfoFromJSONTyped,
    ChainflipBaasStatusChunkInfoToJSON,
} from './ChainflipBaasStatusChunkInfo';

/**
 * 
 * @export
 * @interface ChainflipBaasStatusDca
 */
export interface ChainflipBaasStatusDca {
    /**
     * 
     * @type {ChainflipBaasStatusChunkInfo}
     * @memberof ChainflipBaasStatusDca
     */
    lastExecutedChunk?: ChainflipBaasStatusChunkInfo;
    /**
     * 
     * @type {ChainflipBaasStatusChunkInfo}
     * @memberof ChainflipBaasStatusDca
     */
    currentChunk?: ChainflipBaasStatusChunkInfo;
    /**
     * 
     * @type {number}
     * @memberof ChainflipBaasStatusDca
     */
    readonly executedChunks?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainflipBaasStatusDca
     */
    readonly remainingChunks?: number;
}

/**
 * Check if a given object implements the ChainflipBaasStatusDca interface.
 */
export function instanceOfChainflipBaasStatusDca(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasStatusDcaFromJSON(json: any): ChainflipBaasStatusDca {
    return ChainflipBaasStatusDcaFromJSONTyped(json, false);
}

export function ChainflipBaasStatusDcaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasStatusDca {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastExecutedChunk': !exists(json, 'lastExecutedChunk') ? undefined : ChainflipBaasStatusChunkInfoFromJSON(json['lastExecutedChunk']),
        'currentChunk': !exists(json, 'currentChunk') ? undefined : ChainflipBaasStatusChunkInfoFromJSON(json['currentChunk']),
        'executedChunks': !exists(json, 'executedChunks') ? undefined : json['executedChunks'],
        'remainingChunks': !exists(json, 'remainingChunks') ? undefined : json['remainingChunks'],
    };
}

export function ChainflipBaasStatusDcaToJSON(value?: ChainflipBaasStatusDca | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastExecutedChunk': ChainflipBaasStatusChunkInfoToJSON(value.lastExecutedChunk),
        'currentChunk': ChainflipBaasStatusChunkInfoToJSON(value.currentChunk),
    };
}
