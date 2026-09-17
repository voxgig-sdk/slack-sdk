import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Reminder, ReminderLoadMatch, ReminderListMatch, ReminderCreateData } from '../SlackTypes';
declare class ReminderEntity extends SlackEntityBase<Reminder> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ReminderEntity): ReminderEntity;
    load(this: any, reqmatch?: ReminderLoadMatch, ctrl?: Control): Promise<ReminderEntity>;
    list(this: any, reqmatch?: ReminderListMatch, ctrl?: Control): Promise<ReminderEntity[]>;
    create(this: any, reqdata?: ReminderCreateData, ctrl?: Control): Promise<ReminderEntity>;
}
export { ReminderEntity };
