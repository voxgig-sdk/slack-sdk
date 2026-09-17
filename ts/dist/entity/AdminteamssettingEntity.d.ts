import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminteamssetting, AdminteamssettingLoadMatch, AdminteamssettingCreateData } from '../SlackTypes';
declare class AdminteamssettingEntity extends SlackEntityBase<Adminteamssetting> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminteamssettingEntity): AdminteamssettingEntity;
    load(this: any, reqmatch?: AdminteamssettingLoadMatch, ctrl?: Control): Promise<AdminteamssettingEntity>;
    create(this: any, reqdata?: AdminteamssettingCreateData, ctrl?: Control): Promise<AdminteamssettingEntity>;
}
export { AdminteamssettingEntity };
