export interface User {
    id: number;
    username: string;
    name: string;
    avatar?: string;
}

export interface Chat {
    id: number;
    title: string;
    subtitle: string;
    helperText?: string;
    avatar: { label?: string; url: string};
    options?: {label: string; event: string}[];
    count?: number;
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