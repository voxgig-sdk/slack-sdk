import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Usergroup, UsergroupListMatch, UsergroupCreateData } from '../SlackTypes';
declare class UsergroupEntity extends SlackEntityBase<Usergroup> {
    constructor(client: SlackSDK, entopts: any);
    make(this: UsergroupEntity): UsergroupEntity;
    list(this: any, reqmatch?: UsergroupListMatch, ctrl?: Control): Promise<UsergroupEntity[]>;
    create(this: any, reqdata?: UsergroupCreateData, ctrl?: Control): Promise<UsergroupEntity>;
}
export { UsergroupEntity };
