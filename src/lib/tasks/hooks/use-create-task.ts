import { Task } from "@/cloud/todo/v1/todo_pb";
import  firebaseAdmin from "@/firebase/adminApp";
import {TODO_COLLECTION, Todo} from '@/lib/tasks/type/task';

const firestore = firebaseAdmin.firestore();

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