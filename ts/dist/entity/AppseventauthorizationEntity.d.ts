import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Appseventauthorization, AppseventauthorizationLoadMatch } from '../SlackTypes';
declare class AppseventauthorizationEntity extends SlackEntityBase<Appseventauthorization> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppseventauthorizationEntity): AppseventauthorizationEntity;
    load(this: any, reqmatch?: AppseventauthorizationLoadMatch, ctrl?: Control): Promise<AppseventauthorizationEntity>;
}
export { AppseventauthorizationEntity };
