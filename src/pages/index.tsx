import React from "react";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import nookies from "nookies";
import dynamic from 'next/dynamic';
import {userIsLoggedIn} from "@/firebase/auth/utils";

const HomeComponent = dynamic(
  () => import('@/components/home/Home'),
  {
    ssr: false,
  }
);

const HeaderComponent = dynamic(
  () => import('@/components/header/Header'),
  {
    ssr: false,
  }
);

const DashboardComponent = dynamic(
  () => import('@/components/dashboard/Dashboard'),
  {
    ssr: false,
  }
);


export default function Index({authenticated} : InferGetServerSidePropsType < typeof getServerSideProps >) {
    return ( 
    <> 
        <HeaderComponent authenticated={authenticated}/>
        {authenticated ? (<DashboardComponent/>) : (<HomeComponent />)}
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const authenticated = await userIsLoggedIn(cookies);

  return {
    props: { authenticated },
  };
}