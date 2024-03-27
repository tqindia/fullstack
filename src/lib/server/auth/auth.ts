import firebaseAdmin from "@/firebase/adminApp";

export const loggedInUser = async (token: any): Promise<string> => {
  try {
    const user = await firebaseAdmin.auth().verifyIdToken(token);
    return user.uid
  } catch (error) {
    return "";
  }
};
