import { ConversationsinfoEntity } from './entity/ConversationsinfoEntity';
import { ConversationslistEntity } from './entity/ConversationslistEntity';
export type * from './SlackTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SlackEntityBase } from './SlackEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SlackSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Conversationsinfo(entopts?: Record<string, any>): ConversationsinfoEntity;
    Conversationslist(entopts?: Record<string, any>): ConversationslistEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SlackSDK;
    tester(testopts?: any, sdkopts?: any): SlackSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SlackSDK;
export { stdutil, config, BaseFeature, SlackEntityBase, SlackSDK, SDK, };
