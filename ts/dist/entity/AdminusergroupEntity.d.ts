import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminusergroup, AdminusergroupLoadMatch, AdminusergroupCreateData } from '../SlackTypes';
declare class AdminusergroupEntity extends SlackEntityBase<Adminusergroup> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminusergroupEntity): AdminusergroupEntity;
    load(this: any, reqmatch?: AdminusergroupLoadMatch, ctrl?: Control): Promise<AdminusergroupEntity>;
    create(this: any, reqdata?: AdminusergroupCreateData, ctrl?: Control): Promise<AdminusergroupEntity>;
}
export { AdminusergroupEntity };
