import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Usersprofile, UsersprofileLoadMatch, UsersprofileCreateData } from '../SlackTypes';
declare class UsersprofileEntity extends SlackEntityBase<Usersprofile> {
    constructor(client: SlackSDK, entopts: any);
    make(this: UsersprofileEntity): UsersprofileEntity;
    load(this: any, reqmatch?: UsersprofileLoadMatch, ctrl?: Control): Promise<UsersprofileEntity>;
    create(this: any, reqdata?: UsersprofileCreateData, ctrl?: Control): Promise<UsersprofileEntity>;
}
export { UsersprofileEntity };
