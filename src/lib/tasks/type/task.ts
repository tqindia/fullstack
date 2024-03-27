// Define the structure of your data model
export interface Todo {
    id?: string;
    title: string;
    description: string;
    status: number;
    userId: string
}


// Optionally, define a collection path constant
export const TODO_COLLECTION = 'tasks';
