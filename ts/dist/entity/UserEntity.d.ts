import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserListMatch, UserCreateData } from '../SlackTypes';
declare class UserEntity extends SlackEntityBase<User> {
    constructor(client: SlackSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<UserEntity>;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
    create(this: any, reqdata?: UserCreateData, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
