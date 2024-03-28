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
        src="/BG.jpeg"
        alt="The Onchain Modular Universe"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
      />  
      <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" />
      <div className="dark-overlay">
        <div className="image-container flex flex-col">
          <div className="flex-row">
            <Image
              className="name"
              src="/name.png"
              alt="Nounspace"
              objectFit="cover"
              quality={100}
            />  
          </div>
          <div className="flex-row">
            <a href="https://github.com/Nounspace">
              <Image
                src="/GithubLogo.webp"
                alt="Github"
                width="100"
              /> 
            </a>
          </div>
        </div>
      </div>
    </main>

  );
}
