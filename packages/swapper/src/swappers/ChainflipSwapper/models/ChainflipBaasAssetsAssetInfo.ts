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
 * @interface ChainflipBaasAssetsAssetInfo
 */
export interface ChainflipBaasAssetsAssetInfo {
    /**
     * Unique id of the asset.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    id?: string;
    /**
     * Direction an asset can be used in. Ingress assets can only be used to swap from. Egress assets can only be used to swap to. Assets with both can be used to swap from and to.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    direction?: ChainflipBaasAssetsAssetInfoDirectionEnum;
    /**
     * Display ticker of the asset.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    ticker?: string;
    /**
     * Descriptive name of the asset.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    name?: string;
    /**
     * Name of the network where the asset is located.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    network?: string;
    /**
     * The contract address for tokens which have one.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    contractAddress?: string | null;
    /**
     * A url to the logo for the network.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    readonly networkLogo?: string;
    /**
     * A url to the logo for the asset.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    readonly assetLogo?: string;
    /**
     * Number of decimals the asset native value contains.
     * @type {number}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    decimals?: number;
    /**
     * Minimum amount required to swap the asset.
     * @type {number}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    minimalAmount?: number;
    /**
     * Minimum amount in native units required to swap the asset.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    readonly minimalAmountNative?: string;
    /**
     * Current pool price of the asset in USDC.
     * @type {number}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    readonly usdPrice?: number | null;
    /**
     * Current pool price of the asset in USDC native units.
     * @type {string}
     * @memberof ChainflipBaasAssetsAssetInfo
     */
    readonly usdPriceNative?: string | null;
}


/**
 * @export
 */
export const ChainflipBaasAssetsAssetInfoDirectionEnum = {
    Ingress: 'ingress',
    Egress: 'egress',
    Both: 'both'
} as const;
export type ChainflipBaasAssetsAssetInfoDirectionEnum = typeof ChainflipBaasAssetsAssetInfoDirectionEnum[keyof typeof ChainflipBaasAssetsAssetInfoDirectionEnum];


/**
 * Check if a given object implements the ChainflipBaasAssetsAssetInfo interface.
 */
export function instanceOfChainflipBaasAssetsAssetInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasAssetsAssetInfoFromJSON(json: any): ChainflipBaasAssetsAssetInfo {
    return ChainflipBaasAssetsAssetInfoFromJSONTyped(json, false);
}

export function ChainflipBaasAssetsAssetInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasAssetsAssetInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'ticker': !exists(json, 'ticker') ? undefined : json['ticker'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'contractAddress': !exists(json, 'contractAddress') ? undefined : json['contractAddress'],
        'networkLogo': !exists(json, 'networkLogo') ? undefined : json['networkLogo'],
        'assetLogo': !exists(json, 'assetLogo') ? undefined : json['assetLogo'],
        'decimals': !exists(json, 'decimals') ? undefined : json['decimals'],
        'minimalAmount': !exists(json, 'minimalAmount') ? undefined : json['minimalAmount'],
        'minimalAmountNative': !exists(json, 'minimalAmountNative') ? undefined : json['minimalAmountNative'],
        'usdPrice': !exists(json, 'usdPrice') ? undefined : json['usdPrice'],
        'usdPriceNative': !exists(json, 'usdPriceNative') ? undefined : json['usdPriceNative'],
    };
}

export function ChainflipBaasAssetsAssetInfoToJSON(value?: ChainflipBaasAssetsAssetInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'direction': value.direction,
        'ticker': value.ticker,
        'name': value.name,
        'network': value.network,
        'contractAddress': value.contractAddress,
        'decimals': value.decimals,
        'minimalAmount': value.minimalAmount,
    };
}
