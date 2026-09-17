import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Filesremote, FilesremoteLoadMatch, FilesremoteCreateData } from '../SlackTypes';
declare class FilesremoteEntity extends SlackEntityBase<Filesremote> {
    constructor(client: SlackSDK, entopts: any);
    make(this: FilesremoteEntity): FilesremoteEntity;
    load(this: any, reqmatch?: FilesremoteLoadMatch, ctrl?: Control): Promise<FilesremoteEntity>;
    create(this: any, reqdata?: FilesremoteCreateData, ctrl?: Control): Promise<FilesremoteEntity>;
}
export { FilesremoteEntity };
