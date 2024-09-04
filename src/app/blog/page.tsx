
"use client";
import Head from 'next/head';
import { useRouter } from 'next/router';

import LoginSignUP from '@/components/Login';
import HomePageMainContext from '@/components/Pages/home';
import "../../styles/globals.css";  
import DefaultLayoutforHomepage from '@/layouts/layout';
import BlogMainContext from '@/components/Pages/blog';


export default function HomePage() {
 

  return (
    <DefaultLayoutforHomepage>
      <main className=''> 
       <BlogMainContext />
      </main>
    </DefaultLayoutforHomepage>
  );
}