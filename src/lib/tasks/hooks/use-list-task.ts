import firebaseAdmin from "@/firebase/adminApp";
import { TODO_COLLECTION } from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

/**
 * Function to retrieve a list of tasks from Firestore based on user ID.
 * @param uid The user ID for which tasks are to be retrieved.
 * @returns A promise that resolves to an object containing an array of tasks if successful, otherwise an empty object.
 */
export const useListTask = async (uid: string): Promise<any> => {
    try {
        const snapshot = await firestore
            .collection(TODO_COLLECTION)
            .where("userId", "==", uid)
            .get();
        const tasks = snapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data()
        }));

        return { tasks };
    } catch (error) {
        console.error('Error retrieving tasks: ', error);
    }
    return {};
}
