import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { AdminconversationsrestrictAccess, AdminconversationsrestrictAccessLoadMatch, AdminconversationsrestrictAccessCreateData } from '../SlackTypes';
declare class AdminconversationsrestrictAccessEntity extends SlackEntityBase<AdminconversationsrestrictAccess> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminconversationsrestrictAccessEntity): AdminconversationsrestrictAccessEntity;
    load(this: any, reqmatch?: AdminconversationsrestrictAccessLoadMatch, ctrl?: Control): Promise<AdminconversationsrestrictAccessEntity>;
    create(this: any, reqdata?: AdminconversationsrestrictAccessCreateData, ctrl?: Control): Promise<AdminconversationsrestrictAccessEntity>;
}
export { AdminconversationsrestrictAccessEntity };
