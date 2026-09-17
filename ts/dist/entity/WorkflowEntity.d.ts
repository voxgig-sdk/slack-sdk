import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch } from '../SlackTypes';
declare class WorkflowEntity extends SlackEntityBase<Workflow> {
    constructor(client: SlackSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
}
export { WorkflowEntity };
