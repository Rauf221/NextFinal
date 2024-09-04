"use client";
import React, { useState, ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DefaultLayoutforHomepage({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
