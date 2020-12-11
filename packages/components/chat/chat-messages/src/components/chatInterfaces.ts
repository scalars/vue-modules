export interface User {
    id: number;
    name: string;
    avatar?: string;
}

export interface Message {
    id: number;
    text: string;
    date: string;
    viewed?: boolean;
    userId: string | number;
}

export interface Header {
    avatar?: string|null;
    title: string;
    subtitle?: string;
    helperText?: string;
}

export interface MenuOption {
    label: string;
    event: string;
}