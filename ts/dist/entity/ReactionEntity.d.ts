import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Reaction, ReactionLoadMatch, ReactionListMatch, ReactionCreateData } from '../SlackTypes';
declare class ReactionEntity extends SlackEntityBase<Reaction> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ReactionEntity): ReactionEntity;
    load(this: any, reqmatch?: ReactionLoadMatch, ctrl?: Control): Promise<ReactionEntity>;
    list(this: any, reqmatch?: ReactionListMatch, ctrl?: Control): Promise<ReactionEntity[]>;
    create(this: any, reqdata?: ReactionCreateData, ctrl?: Control): Promise<ReactionEntity>;
}
export { ReactionEntity };
