import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Usergroupsuser, UsergroupsuserListMatch, UsergroupsuserCreateData } from '../SlackTypes';
declare class UsergroupsuserEntity extends SlackEntityBase<Usergroupsuser> {
    constructor(client: SlackSDK, entopts: any);
    make(this: UsergroupsuserEntity): UsergroupsuserEntity;
    list(this: any, reqmatch?: UsergroupsuserListMatch, ctrl?: Control): Promise<UsergroupsuserEntity[]>;
    create(this: any, reqdata?: UsergroupsuserCreateData, ctrl?: Control): Promise<UsergroupsuserEntity>;
}
export { UsergroupsuserEntity };
