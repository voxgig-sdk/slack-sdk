import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminemoji, AdminemojiLoadMatch, AdminemojiCreateData } from '../SlackTypes';
declare class AdminemojiEntity extends SlackEntityBase<Adminemoji> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminemojiEntity): AdminemojiEntity;
    load(this: any, reqmatch?: AdminemojiLoadMatch, ctrl?: Control): Promise<AdminemojiEntity>;
    create(this: any, reqdata?: AdminemojiCreateData, ctrl?: Control): Promise<AdminemojiEntity>;
}
export { AdminemojiEntity };
