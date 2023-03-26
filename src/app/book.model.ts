export interface Book {
    id: string;
//the id comes in on the 'items'
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
    };
}