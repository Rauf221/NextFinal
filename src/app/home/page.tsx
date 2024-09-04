
"use client";
import Head from 'next/head';
import { useRouter } from 'next/router';

import LoginSignUP from '@/components/Login';
import HomePageMainContext from '@/components/Pages/home';
import "../../styles/globals.css";  
import DefaultLayoutforHomepage from '@/layouts/layout';


export default function HomePage() {
 

  return (
    <DefaultLayoutforHomepage>
      <main className='mt-10'> 
         <HomePageMainContext />
      </main>
    </DefaultLayoutforHomepage>
  );
}