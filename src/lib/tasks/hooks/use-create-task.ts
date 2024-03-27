import firebaseAdmin from "@/firebase/adminApp";
import { TODO_COLLECTION, Todo } from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

/**
 * Function to create a new task in Firestore.
 * @param todo The task object to be added to Firestore.
 * @returns A promise that resolves to true if the task is created successfully, otherwise false.
 */
export const useCreateTask = async (todo: Todo): Promise<boolean> => {
    try {
        const docRef = await firestore.collection(TODO_COLLECTION).add(todo);
        console.log('Todo document created with ID: ', docRef.id);
        return true;
    } catch (error) {
        console.error('Error creating todo: ', error);
    }
    return false;
}
