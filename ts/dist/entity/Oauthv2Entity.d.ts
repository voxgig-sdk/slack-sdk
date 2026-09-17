import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Oauthv2, Oauthv2LoadMatch } from '../SlackTypes';
declare class Oauthv2Entity extends SlackEntityBase<Oauthv2> {
    constructor(client: SlackSDK, entopts: any);
    make(this: Oauthv2Entity): Oauthv2Entity;
    load(this: any, reqmatch?: Oauthv2LoadMatch, ctrl?: Control): Promise<Oauthv2Entity>;
}
export { Oauthv2Entity };
