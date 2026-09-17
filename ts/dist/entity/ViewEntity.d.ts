import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { View, ViewLoadMatch } from '../SlackTypes';
declare class ViewEntity extends SlackEntityBase<View> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ViewEntity): ViewEntity;
    load(this: any, reqmatch?: ViewLoadMatch, ctrl?: Control): Promise<ViewEntity>;
}
export { ViewEntity };
