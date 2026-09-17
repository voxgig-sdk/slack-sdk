import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Star, StarListMatch, StarCreateData } from '../SlackTypes';
declare class StarEntity extends SlackEntityBase<Star> {
    constructor(client: SlackSDK, entopts: any);
    make(this: StarEntity): StarEntity;
    list(this: any, reqmatch?: StarListMatch, ctrl?: Control): Promise<StarEntity[]>;
    create(this: any, reqdata?: StarCreateData, ctrl?: Control): Promise<StarEntity>;
}
export { StarEntity };
