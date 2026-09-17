import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Conversation, ConversationLoadMatch, ConversationListMatch, ConversationCreateData } from '../SlackTypes';
declare class ConversationEntity extends SlackEntityBase<Conversation> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ConversationEntity): ConversationEntity;
    load(this: any, reqmatch?: ConversationLoadMatch, ctrl?: Control): Promise<ConversationEntity>;
    list(this: any, reqmatch?: ConversationListMatch, ctrl?: Control): Promise<ConversationEntity[]>;
    create(this: any, reqdata?: ConversationCreateData, ctrl?: Control): Promise<ConversationEntity>;
}
export { ConversationEntity };
