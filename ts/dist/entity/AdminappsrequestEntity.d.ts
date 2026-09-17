import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminappsrequest, AdminappsrequestLoadMatch } from '../SlackTypes';
declare class AdminappsrequestEntity extends SlackEntityBase<Adminappsrequest> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminappsrequestEntity): AdminappsrequestEntity;
    load(this: any, reqmatch?: AdminappsrequestLoadMatch, ctrl?: Control): Promise<AdminappsrequestEntity>;
}
export { AdminappsrequestEntity };
