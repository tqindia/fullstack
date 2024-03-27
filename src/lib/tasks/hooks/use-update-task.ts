import { Task } from "@/cloud/todo/v1/todo_pb";
import  firebaseAdmin from "@/firebase/adminApp";
import {TODO_COLLECTION, Todo} from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

export const useUpdateTask = async (todo: Todo): Promise<boolean> => {
    try {
        const docRef = await firestore.collection(TODO_COLLECTION).doc(todo.id).update(todo);
        console.log('Todo document created with ID: ', docRef);
        return true;
    } catch (error) {
        console.error('Error creating todo: ', error);
    }
    return false;
}