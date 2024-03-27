import "@/globals";
import { AppProps } from "next/app";
import React from "react";
import { AuthProvider } from "@/firebase/auth/auth";
import { ThemeProvider } from "@/core/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import  { Toaster as ReactToaster } from 'react-hot-toast';
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
          <Toaster />
          <ReactToaster />
          <div className="pt-20">
            <Component {...pageProps} />
          </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
