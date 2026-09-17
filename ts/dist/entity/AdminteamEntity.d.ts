import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminteam, AdminteamLoadMatch, AdminteamCreateData } from '../SlackTypes';
declare class AdminteamEntity extends SlackEntityBase<Adminteam> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminteamEntity): AdminteamEntity;
    load(this: any, reqmatch?: AdminteamLoadMatch, ctrl?: Control): Promise<AdminteamEntity>;
    create(this: any, reqdata?: AdminteamCreateData, ctrl?: Control): Promise<AdminteamEntity>;
}
export { AdminteamEntity };
