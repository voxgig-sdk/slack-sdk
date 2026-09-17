import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamListMatch } from '../SlackTypes';
declare class TeamEntity extends SlackEntityBase<Team> {
    constructor(client: SlackSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
}
export { TeamEntity };
