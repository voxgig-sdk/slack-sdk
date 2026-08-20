export interface Channel {
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
export interface ChannelLoadMatch {
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
export interface ChannelListMatch {
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
