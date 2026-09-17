import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Adminappsrestricted, AdminappsrestrictedLoadMatch } from '../SlackTypes';
declare class AdminappsrestrictedEntity extends SlackEntityBase<Adminappsrestricted> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AdminappsrestrictedEntity): AdminappsrestrictedEntity;
    load(this: any, reqmatch?: AdminappsrestrictedLoadMatch, ctrl?: Control): Promise<AdminappsrestrictedEntity>;
}
export { AdminappsrestrictedEntity };
