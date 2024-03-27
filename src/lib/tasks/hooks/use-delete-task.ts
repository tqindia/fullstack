import firebaseAdmin from "@/firebase/adminApp";
import { TODO_COLLECTION } from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

/**
 * Function to delete a task from Firestore.
 * @param id The ID of the task document to be deleted.
 * @returns A promise that resolves to true if the task is deleted successfully, otherwise false.
 */
export const useDeleteTask = async (id: string): Promise<boolean> => {
    try {
        await firestore.collection(TODO_COLLECTION).doc(id).delete();
        console.log('Todo document deleted with ID: ', id);
        return true;
    } catch (error) {
        console.error('Error deleting todo: ', error);
    }
    return false;
}
