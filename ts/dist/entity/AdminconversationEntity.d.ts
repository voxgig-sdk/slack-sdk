import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminconversation, AdminconversationLoadMatch, AdminconversationListMatch, AdminconversationCreateData } from '../SlackTypes';
declare class AdminconversationEntity extends SlackEntityBase<Adminconversation> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminconversationEntity): AdminconversationEntity;
    load(this: any, reqmatch?: AdminconversationLoadMatch, ctrl?: Control): Promise<AdminconversationEntity>;
    list(this: any, reqmatch?: AdminconversationListMatch, ctrl?: Control): Promise<AdminconversationEntity[]>;
    create(this: any, reqdata?: AdminconversationCreateData, ctrl?: Control): Promise<AdminconversationEntity>;
}
export { AdminconversationEntity };
