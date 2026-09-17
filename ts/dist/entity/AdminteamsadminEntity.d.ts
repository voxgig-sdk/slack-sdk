import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminteamsadmin, AdminteamsadminLoadMatch } from '../SlackTypes';
declare class AdminteamsadminEntity extends SlackEntityBase<Adminteamsadmin> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminteamsadminEntity): AdminteamsadminEntity;
    load(this: any, reqmatch?: AdminteamsadminLoadMatch, ctrl?: Control): Promise<AdminteamsadminEntity>;
}
export { AdminteamsadminEntity };
