import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Pin, PinLoadMatch, PinCreateData } from '../SlackTypes';
declare class PinEntity extends SlackEntityBase<Pin> {
    constructor(client: SlackSDK, entopts: any);
    make(this: PinEntity): PinEntity;
    load(this: any, reqmatch?: PinLoadMatch, ctrl?: Control): Promise<PinEntity>;
    create(this: any, reqdata?: PinCreateData, ctrl?: Control): Promise<PinEntity>;
}
export { PinEntity };
