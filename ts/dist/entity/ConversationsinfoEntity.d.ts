import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Conversationsinfo, ConversationsinfoLoadMatch } from '../SlackTypes';
declare class ConversationsinfoEntity extends SlackEntityBase<Conversationsinfo> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ConversationsinfoEntity): ConversationsinfoEntity;
    load(this: any, reqmatch?: ConversationsinfoLoadMatch, ctrl?: Control): Promise<ConversationsinfoEntity>;
}
export { ConversationsinfoEntity };
