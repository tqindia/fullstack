import firebaseAdmin from "@/firebase/adminApp";

// Define a function to retrieve the user's UID from a token
export const loggedInUser = async (token: string): Promise<string> => {
  try {
    // Verify the token and extract the user's UID
    const user = await firebaseAdmin.auth().verifyIdToken(token);
    return user.uid;
  } catch (error) {
    // Return an empty string if there's an error
    return "";
  }
};
