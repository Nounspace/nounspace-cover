'use client'

import Image from "next/image";
import NextImage from 'next/image'

var heroHasLoaded=false;

const doFadeIn = () => {
  heroHasLoaded=true;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <NextImage
        priority
        src="/NounspaceDesktop.png"
        alt="The Onchain Modular Universe"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="image"
        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
      />  
      <NextImage
        priority
        src="/NounspaceMobile.png"
        alt="The Onchain Modular Universe"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="image2"
        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
      /> 
    </main>

  );
}
