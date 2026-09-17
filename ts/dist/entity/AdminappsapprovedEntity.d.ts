import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminappsapproved, AdminappsapprovedLoadMatch } from '../SlackTypes';
declare class AdminappsapprovedEntity extends SlackEntityBase<Adminappsapproved> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminappsapprovedEntity): AdminappsapprovedEntity;
    load(this: any, reqmatch?: AdminappsapprovedLoadMatch, ctrl?: Control): Promise<AdminappsapprovedEntity>;
}
export { AdminappsapprovedEntity };
