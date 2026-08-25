import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Conversationslist, ConversationslistListMatch } from '../SlackTypes';
declare class ConversationslistEntity extends SlackEntityBase<Conversationslist> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ConversationslistEntity): ConversationslistEntity;
    list(this: any, reqmatch?: ConversationslistListMatch, ctrl?: Control): Promise<ConversationslistEntity[]>;
}
export { ConversationslistEntity };
