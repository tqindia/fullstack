import "@/globals";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "@/core/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import  { Toaster as ReactToaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react"

function App({
    Component,
    pageProps: { session, ...pageProps },
  }: any) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider session={session}>
            <Toaster />
            <ReactToaster />
            <div className="pt-20">
              <Component {...pageProps} />
            </div>
        </SessionProvider>
      </ThemeProvider>
    )
  }


export default App;
