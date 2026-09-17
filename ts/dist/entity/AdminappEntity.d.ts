import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminapp, AdminappCreateData } from '../SlackTypes';
declare class AdminappEntity extends SlackEntityBase<Adminapp> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminappEntity): AdminappEntity;
    create(this: any, reqdata?: AdminappCreateData, ctrl?: Control): Promise<AdminappEntity>;
}
export { AdminappEntity };
