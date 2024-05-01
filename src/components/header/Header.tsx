import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ThemeSwitch} from "@/components/theme/ThemeSwitch";
import { useSession, signIn, signOut } from "next-auth/react"


export default function HeaderComponent() {
    const { data: session } = useSession()

    return ( 
    <>
    <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center space-x-2">
            <ThemeSwitch/>
            <Link href="">
                <Button variant="outline">GitHub</Button>
            </Link>
            {session && (
                <Button onClick={() => signOut()} variant={"destructive"}>
                    Sign Out</Button>
            )}
            {!session && (
                 <Button onClick={() => signIn()} variant={"ghost"}>
                 Sign In</Button>
             )}
        </div>
    </>
  );
}
