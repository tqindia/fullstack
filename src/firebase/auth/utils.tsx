import firebaseAdmin from "@/firebase/adminApp";

// Function to check if user is logged in
export const userIsLoggedIn = async (cookies: any) => {
  try {
    // Verify the ID token stored in cookies
    await firebaseAdmin.auth().verifyIdToken(cookies.token);
    // If verification is successful, user is logged in
    return true;
  } catch (error) {
    // If verification fails, user is not logged in
    return false;
  }
};
