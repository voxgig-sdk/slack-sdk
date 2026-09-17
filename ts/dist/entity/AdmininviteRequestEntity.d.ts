import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { AdmininviteRequest, AdmininviteRequestLoadMatch, AdmininviteRequestCreateData } from '../SlackTypes';
declare class AdmininviteRequestEntity extends SlackEntityBase<AdmininviteRequest> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdmininviteRequestEntity): AdmininviteRequestEntity;
    load(this: any, reqmatch?: AdmininviteRequestLoadMatch, ctrl?: Control): Promise<AdmininviteRequestEntity>;
    create(this: any, reqdata?: AdmininviteRequestCreateData, ctrl?: Control): Promise<AdmininviteRequestEntity>;
}
export { AdmininviteRequestEntity };
