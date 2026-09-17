import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Filescomment, FilescommentCreateData } from '../SlackTypes';
declare class FilescommentEntity extends SlackEntityBase<Filescomment> {
    constructor(client: SlackSDK, entopts: any);
    make(this: FilescommentEntity): FilescommentEntity;
    create(this: any, reqdata?: FilescommentCreateData, ctrl?: Control): Promise<FilescommentEntity>;
}
export { FilescommentEntity };
