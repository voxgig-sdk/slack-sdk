import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { ChatscheduledMessage, ChatscheduledMessageListMatch } from '../SlackTypes';
declare class ChatscheduledMessageEntity extends SlackEntityBase<ChatscheduledMessage> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ChatscheduledMessageEntity): ChatscheduledMessageEntity;
    list(this: any, reqmatch?: ChatscheduledMessageListMatch, ctrl?: Control): Promise<ChatscheduledMessageEntity[]>;
}
export { ChatscheduledMessageEntity };
