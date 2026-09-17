import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Rtm, RtmLoadMatch } from '../SlackTypes';
declare class RtmEntity extends SlackEntityBase<Rtm> {
    constructor(client: SlackSDK, entopts: any);
    make(this: RtmEntity): RtmEntity;
    load(this: any, reqmatch?: RtmLoadMatch, ctrl?: Control): Promise<RtmEntity>;
}
export { RtmEntity };
