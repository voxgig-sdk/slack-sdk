import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { AdmininviteRequestsapproved, AdmininviteRequestsapprovedLoadMatch } from '../SlackTypes';
declare class AdmininviteRequestsapprovedEntity extends SlackEntityBase<AdmininviteRequestsapproved> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdmininviteRequestsapprovedEntity): AdmininviteRequestsapprovedEntity;
    load(this: any, reqmatch?: AdmininviteRequestsapprovedLoadMatch, ctrl?: Control): Promise<AdmininviteRequestsapprovedEntity>;
}
export { AdmininviteRequestsapprovedEntity };
