'use client'; //telling next to use the client side to render the page

import Image from "next/image";
import React, { useState } from 'react';


export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <main className="bg-background h-screen w-full flex flex-col items-center justify-center"> 
      {!isExpanded ? (
        <div onClick={() => setIsExpanded(true)} className="bg-boxColor rounded-xl p-8 cursor-pointer hover:shadow-xl transition-shadow">
          <p className="font-mono text-center">
            You have mail!
          </p>
          <p className="font-mono text-center text-xs">
            click me
          </p>
        </div>
      ) : (
        <div onClick={() => setIsExpanded(false)} className="bg-boxColor rounded-xl shadow-lg p-8 cursor-pointer">
          Box 2
        </div>
      )}





    </main>
  );
}
