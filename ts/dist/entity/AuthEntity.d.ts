import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Auth, AuthLoadMatch } from '../SlackTypes';
declare class AuthEntity extends SlackEntityBase<Auth> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    load(this: any, reqmatch?: AuthLoadMatch, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
