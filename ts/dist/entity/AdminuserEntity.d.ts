import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminuser, AdminuserLoadMatch, AdminuserCreateData } from '../SlackTypes';
declare class AdminuserEntity extends SlackEntityBase<Adminuser> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminuserEntity): AdminuserEntity;
    load(this: any, reqmatch?: AdminuserLoadMatch, ctrl?: Control): Promise<AdminuserEntity>;
    create(this: any, reqdata?: AdminuserCreateData, ctrl?: Control): Promise<AdminuserEntity>;
}
export { AdminuserEntity };
