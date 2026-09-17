import { SlackEntityBase } from '../SlackEntityBase';
import type { SlackSDK } from '../SlackSDK';
import type { Control } from '../types';
import type { Emoji, EmojiLoadMatch } from '../SlackTypes';
declare class EmojiEntity extends SlackEntityBase<Emoji> {
    constructor(client: SlackSDK, entopts: any);
    make(this: EmojiEntity): EmojiEntity;
    load(this: any, reqmatch?: EmojiLoadMatch, ctrl?: Control): Promise<EmojiEntity>;
}
export { EmojiEntity };
