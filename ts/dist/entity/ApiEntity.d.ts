import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch } from '../SlackTypes';
declare class ApiEntity extends SlackEntityBase<Api> {
    constructor(client: SlackSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
}
export { ApiEntity };
