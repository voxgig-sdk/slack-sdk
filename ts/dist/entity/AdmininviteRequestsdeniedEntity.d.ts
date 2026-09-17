import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { AdmininviteRequestsdenied, AdmininviteRequestsdeniedLoadMatch } from '../SlackTypes';
declare class AdmininviteRequestsdeniedEntity extends SlackEntityBase<AdmininviteRequestsdenied> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdmininviteRequestsdeniedEntity): AdmininviteRequestsdeniedEntity;
    load(this: any, reqmatch?: AdmininviteRequestsdeniedLoadMatch, ctrl?: Control): Promise<AdmininviteRequestsdeniedEntity>;
}
export { AdmininviteRequestsdeniedEntity };
