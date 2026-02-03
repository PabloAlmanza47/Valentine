'use client'; //telling next to use the client side to render the page

import Image from "next/image";
import React, { useState } from 'react';
import MovingButton from "../../components/moving_button";


export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <main className="bg-background h-screen w-full flex flex-col items-center justify-center"> 
      {!isExpanded ? (
        <div onClick={() => setIsExpanded(true)} className="relative bg-boxColor rounded-xl p-8 cursor-pointer hover:shadow-xl transition-shadow">
          <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-red-600 text-center"> 1 </div>
          <p className="font-mono text-center"> You have mail! </p>
          <p className="font-mono text-center text-xs"> click me </p>
        </div>
      ) : (
        <div className="bg-boxColor rounded-xl shadow-lg p-8 w-50 h-50">
          <MovingButton />
        </div>
      )}





    </main>
  );
}
