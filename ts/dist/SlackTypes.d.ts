export interface Conversationsinfo {
    created?: number;
    id?: string;
    is_archived?: boolean;
    is_channel?: boolean;
    is_private?: boolean;
    name?: string;
    num_members?: number;
    purpose?: Record<string, any>;
    topic?: Record<string, any>;
}
export interface ConversationsinfoLoadMatch {
    channel: string;
}
export interface Conversationslist {
    created?: number;
    id?: string;
    is_archived?: boolean;
    is_channel?: boolean;
    is_private?: boolean;
    name?: string;
    num_members?: number;
    purpose?: Record<string, any>;
    topic?: Record<string, any>;
}
export interface ConversationslistListMatch {
    cursor?: string;
    limit?: number;
}
