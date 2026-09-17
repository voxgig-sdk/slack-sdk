import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminteamsowner, AdminteamsownerLoadMatch } from '../SlackTypes';
declare class AdminteamsownerEntity extends SlackEntityBase<Adminteamsowner> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminteamsownerEntity): AdminteamsownerEntity;
    load(this: any, reqmatch?: AdminteamsownerLoadMatch, ctrl?: Control): Promise<AdminteamsownerEntity>;
}
export { AdminteamsownerEntity };
