import React from "react";

export default function HomeComponent() {
    return ( 
    <>
            <section className="h-screen flex justify-center items-center">
                <div className="flex flex-col items-center gap-6 max-w-3xl">
                    <h1
                        className="text-3xl font-extrabold leading-tight tracking-tighter text-center md:text-4xl">
                        Fullstack Boilerplate
                    </h1>
                    <p className="text-lg text-gray-500 text-center max-w-2xl">
                        (NextJs + Typescript + Firebase + ConnectRPC)
                    </p>
                </div>
            </section>

    </>
  );
}
