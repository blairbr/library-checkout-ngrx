export interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
    };
    checkedOut: boolean;
}