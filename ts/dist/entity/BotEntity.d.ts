import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Bot, BotLoadMatch } from '../SlackTypes';
declare class BotEntity extends SlackEntityBase<Bot> {
    constructor(client: SlackSDK, entopts: any);
    make(this: BotEntity): BotEntity;
    load(this: any, reqmatch?: BotLoadMatch, ctrl?: Control): Promise<BotEntity>;
}
export { BotEntity };
