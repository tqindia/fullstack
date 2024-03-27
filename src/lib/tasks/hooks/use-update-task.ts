import firebaseAdmin from "@/firebase/adminApp";
import { TODO_COLLECTION, Todo } from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

/**
 * Function to update a task in Firestore.
 * @param todo The task object containing updated data.
 * @returns A promise that resolves to true if the task is updated successfully, otherwise false.
 */
export const useUpdateTask = async (todo: Todo): Promise<boolean> => {
    try {
        const docRef = await firestore.collection(TODO_COLLECTION).doc(todo.id as string).update(todo);
        console.log('Todo document updated with ID: ', docRef);
        return true;
    } catch (error) {
        console.error('Error updating todo: ', error);
    }
    return false;
}
