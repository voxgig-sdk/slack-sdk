import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Migration, MigrationListMatch } from '../SlackTypes';
declare class MigrationEntity extends SlackEntityBase<Migration> {
    constructor(client: SlackSDK, entopts: any);
    make(this: MigrationEntity): MigrationEntity;
    list(this: any, reqmatch?: MigrationListMatch, ctrl?: Control): Promise<MigrationEntity[]>;
}
export { MigrationEntity };
