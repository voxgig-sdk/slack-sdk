import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Channel, ChannelLoadMatch, ChannelListMatch } from '../SlackTypes';
declare class ChannelEntity extends SlackEntityBase<Channel> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ChannelEntity): ChannelEntity;
    load(this: any, reqmatch?: ChannelLoadMatch, ctrl?: Control): Promise<ChannelEntity>;
    list(this: any, reqmatch?: ChannelListMatch, ctrl?: Control): Promise<ChannelEntity[]>;
}
export { ChannelEntity };
