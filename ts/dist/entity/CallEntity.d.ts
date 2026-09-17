import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Call, CallLoadMatch, CallCreateData } from '../SlackTypes';
declare class CallEntity extends SlackEntityBase<Call> {
    constructor(client: SlackSDK, entopts: any);
    make(this: CallEntity): CallEntity;
    load(this: any, reqmatch?: CallLoadMatch, ctrl?: Control): Promise<CallEntity>;
    create(this: any, reqdata?: CallCreateData, ctrl?: Control): Promise<CallEntity>;
}
export { CallEntity };
