import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminuserssession, AdminuserssessionCreateData } from '../SlackTypes';
declare class AdminuserssessionEntity extends SlackEntityBase<Adminuserssession> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminuserssessionEntity): AdminuserssessionEntity;
    create(this: any, reqdata?: AdminuserssessionCreateData, ctrl?: Control): Promise<AdminuserssessionEntity>;
}
export { AdminuserssessionEntity };
