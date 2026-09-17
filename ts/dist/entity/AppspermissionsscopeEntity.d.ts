import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Appspermissionsscope, AppspermissionsscopeLoadMatch } from '../SlackTypes';
declare class AppspermissionsscopeEntity extends SlackEntityBase<Appspermissionsscope> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppspermissionsscopeEntity): AppspermissionsscopeEntity;
    load(this: any, reqmatch?: AppspermissionsscopeLoadMatch, ctrl?: Control): Promise<AppspermissionsscopeEntity>;
}
export { AppspermissionsscopeEntity };
