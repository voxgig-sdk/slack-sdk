import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Chat, ChatLoadMatch, ChatCreateData } from '../SlackTypes';
declare class ChatEntity extends SlackEntityBase<Chat> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ChatEntity): ChatEntity;
    load(this: any, reqmatch?: ChatLoadMatch, ctrl?: Control): Promise<ChatEntity>;
    create(this: any, reqdata?: ChatCreateData, ctrl?: Control): Promise<ChatEntity>;
}
export { ChatEntity };
