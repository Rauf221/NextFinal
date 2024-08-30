
// pages/index.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/layout';
import LoginSignUP from '@/components/Login';
import HomePageMainContext from '@/components/Pages/home';
import "../../styles/globals.css";  

export default function HomePage() {
    return(
    <DefaultLayout>
      <main className='mt-10'> 
        <HomePageMainContext/>
       
      </main>
    </DefaultLayout>
    )    
  
}