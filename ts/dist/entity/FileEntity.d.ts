import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { File, FileListMatch, FileCreateData } from '../SlackTypes';
declare class FileEntity extends SlackEntityBase<File> {
    constructor(client: SlackSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    list(this: any, reqmatch?: FileListMatch, ctrl?: Control): Promise<FileEntity[]>;
    create(this: any, reqdata?: FileCreateData, ctrl?: Control): Promise<FileEntity>;
}
export { FileEntity };
