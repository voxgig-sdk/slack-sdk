import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Appspermissionsresource, AppspermissionsresourceListMatch } from '../SlackTypes';
declare class AppspermissionsresourceEntity extends SlackEntityBase<Appspermissionsresource> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppspermissionsresourceEntity): AppspermissionsresourceEntity;
    list(this: any, reqmatch?: AppspermissionsresourceListMatch, ctrl?: Control): Promise<AppspermissionsresourceEntity[]>;
}
export { AppspermissionsresourceEntity };
