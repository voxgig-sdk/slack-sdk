import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Callsparticipant, CallsparticipantCreateData } from '../SlackTypes';
declare class CallsparticipantEntity extends SlackEntityBase<Callsparticipant> {
    constructor(client: SlackSDK, entopts: any);
    make(this: CallsparticipantEntity): CallsparticipantEntity;
    create(this: any, reqdata?: CallsparticipantCreateData, ctrl?: Control): Promise<CallsparticipantEntity>;
}
export { CallsparticipantEntity };
