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
    created?: number;
    id: string;
    is_archived?: boolean;
    is_channel?: boolean;
    is_private?: boolean;
    name?: string;
    num_members?: number;
    purpose?: Record<string, any>;
    topic?: Record<string, any>;
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
