import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Dnd, DndLoadMatch, DndCreateData } from '../SlackTypes';
declare class DndEntity extends SlackEntityBase<Dnd> {
    constructor(client: SlackSDK, entopts: any);
    make(this: DndEntity): DndEntity;
    load(this: any, reqmatch?: DndLoadMatch, ctrl?: Control): Promise<DndEntity>;
    create(this: any, reqdata?: DndCreateData, ctrl?: Control): Promise<DndEntity>;
}
export { DndEntity };
