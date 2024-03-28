import React from "react";
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react"

const HomeComponent = dynamic(
  () => import('@/components/home/Home'),
  {
    ssr: false,
  }
);

const HeaderComponent = dynamic(
  () => import('@/components/header/Header'),
  {
    ssr: true,
  }
);

const DashboardComponent = dynamic(
  () => import('@/components/dashboard/Dashboard'),
  {
    ssr: true,
  }
);


export default function Index() {
  const { data: session } = useSession()
    return ( 
    <> 
        <HeaderComponent />
        {session ? (<DashboardComponent/>) : (<HomeComponent />)}
    </>
  );
}
