export interface Location {
    latitude: number;
    longitude: number;
    address?: string;
}

export interface Task {
    id: string;
    title: string;
    comments?: string; // Optional comments/description
    photoUri: string | null;
    location: Location | null;
    completed: boolean;
    userEmail: string;
    createdAt: number;
}
