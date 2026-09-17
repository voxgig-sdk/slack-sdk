import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Appspermission, AppspermissionLoadMatch } from '../SlackTypes';
declare class AppspermissionEntity extends SlackEntityBase<Appspermission> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppspermissionEntity): AppspermissionEntity;
    load(this: any, reqmatch?: AppspermissionLoadMatch, ctrl?: Control): Promise<AppspermissionEntity>;
}
export { AppspermissionEntity };
