import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signOut} from "@/lib/genericUtils";
import {ThemeSwitch} from "@/components/theme/ThemeSwitch";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "@/firebase/clientApp";

// Configure FirebaseUI.
const uiConfig = {
    // Redirect to /dashboard after sign in is successful. Alternatively, you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google as the auth provider.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  
interface HeaderComponentPropsType {
    authenticated: boolean;
}

export default function HeaderComponent({authenticated} : HeaderComponentPropsType) {
    return ( 
    <>
    <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center space-x-2">
            <ThemeSwitch/>
            <Link href="">
                <Button variant="outline">GitHub</Button>
            </Link>
            {authenticated && (
                <Button onClick={signOut} variant={"destructive"}>
                    Sign Out</Button>
            )}
            {!authenticated && (
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
             )}
        </div>
    </>
  );
}
