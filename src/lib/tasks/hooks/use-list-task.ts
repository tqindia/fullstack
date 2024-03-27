import firebaseAdmin from "@/firebase/adminApp";
import {TODO_COLLECTION} from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

export const useListTask = async(uid : string) : Promise < any > => {
    try {
        const snapshot = await firestore
            .collection(TODO_COLLECTION)
            .where("userId", "==", uid)
            .get();
        const tasks = snapshot
            .docs
            .map((doc : any) => ({
                id: doc.id,
                ...doc.data()
            }));

        return {tasks};
    } catch (error) {
        console.error('Error creating todo: ', error);
    }
    return {};
}