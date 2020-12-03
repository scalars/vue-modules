export interface User {
    id: number;
    username: string;
    name: string;
    avatar?: string;
}

export interface Chat {
    id: number;
    text: string;
    createdAt: string;
    user: User;
    options?: {label: string, event: string}[]
}

export interface Header {
    avatar?: string|null;
    title: string;
    subtitle?: string;
}

export interface MenuOption {
    label: string;
    event: string;
}