"use client";
import "../styles/globals.css";


import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { Provider } from "@/provide/SwrProvide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body >
       <Provider>
        <div className="">
           
          {loading ? <Loader /> : children}
      
        </div>
      </Provider>
      </body>
    </html>
  );
}
