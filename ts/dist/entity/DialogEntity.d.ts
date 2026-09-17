import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Dialog, DialogLoadMatch } from '../SlackTypes';
declare class DialogEntity extends SlackEntityBase<Dialog> {
    constructor(client: SlackSDK, entopts: any);
    make(this: DialogEntity): DialogEntity;
    load(this: any, reqmatch?: DialogLoadMatch, ctrl?: Control): Promise<DialogEntity>;
}
export { DialogEntity };
