import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Teamprofile, TeamprofileLoadMatch } from '../SlackTypes';
declare class TeamprofileEntity extends SlackEntityBase<Teamprofile> {
    constructor(client: SlackSDK, entopts: any);
    make(this: TeamprofileEntity): TeamprofileEntity;
    load(this: any, reqmatch?: TeamprofileLoadMatch, ctrl?: Control): Promise<TeamprofileEntity>;
}
export { TeamprofileEntity };
