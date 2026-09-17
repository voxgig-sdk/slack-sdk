import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminconversationsekm, AdminconversationsekmLoadMatch } from '../SlackTypes';
declare class AdminconversationsekmEntity extends SlackEntityBase<Adminconversationsekm> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminconversationsekmEntity): AdminconversationsekmEntity;
    load(this: any, reqmatch?: AdminconversationsekmLoadMatch, ctrl?: Control): Promise<AdminconversationsekmEntity>;
}
export { AdminconversationsekmEntity };
