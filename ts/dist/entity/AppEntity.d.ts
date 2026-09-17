import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { App, AppLoadMatch } from '../SlackTypes';
declare class AppEntity extends SlackEntityBase<App> {
    constructor(client: SlackSDK, entopts: any);
    make(this: AppEntity): AppEntity;
    load(this: any, reqmatch?: AppLoadMatch, ctrl?: Control): Promise<AppEntity>;
}
export { AppEntity };
