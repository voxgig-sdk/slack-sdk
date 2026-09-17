import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Oauth, OauthLoadMatch } from '../SlackTypes';
declare class OauthEntity extends SlackEntityBase<Oauth> {
    constructor(client: SlackSDK, entopts: any);
    make(this: OauthEntity): OauthEntity;
    load(this: any, reqmatch?: OauthLoadMatch, ctrl?: Control): Promise<OauthEntity>;
}
export { OauthEntity };
