import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Appspermissionsuser, AppspermissionsuserLoadMatch } from '../SlackTypes';
declare class AppspermissionsuserEntity extends SlackEntityBase<Appspermissionsuser> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppspermissionsuserEntity): AppspermissionsuserEntity;
    load(this: any, reqmatch?: AppspermissionsuserLoadMatch, ctrl?: Control): Promise<AppspermissionsuserEntity>;
}
export { AppspermissionsuserEntity };
