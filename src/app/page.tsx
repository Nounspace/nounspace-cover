"use client"; 
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  global.Buffer = Buffer;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="dark-overlay">
        <div className="image-container flex flex-col md:flex-row lg:flex-row">
          <div className="flex md:basis-2/4 flex-col md:size-6/12 lg:size-6/12 size-11/12 p-4">
            <Image
              priority
              className="name m-auto"
              src="/name.png"
              alt="Nounspace"
              objectFit="cover"
              width={1457}
              height={360}
            />  
            <div className="flex md:mt-20">
              <div className="flex-1 m-10">
                <a href="https://github.com/Nounspace">
                  <Image
                    src="/GithubLogo.webp"
                    alt="Github"
                    height="80"
                    width="80"
                    className="m-auto"
                  /> 
                </a>
              </div>
              <div className="flex-1 m-10">
                <a href="https://warpcast.com/~/channel/nounspace">
                  <Image
                    src="/farcaster.png"
                    alt="Warpcast Channel"
                    height="80"
                    width="80"
                    className="m-auto"
                  /> 
                </a>
              </div>
              <div className="flex-1 m-10">
              <a href="https://prop.house/0x767a3bdf2aa3b3201b794927a997fcf4e50d4702/21">
                <Image
                  src="/prophouse.png"
                  alt="Prophouse Proposal"
                  height="80"
                  width="80"
                  className="m-auto"
                /> 
              </a>
            </div>
          </div>
          </div>
          <div className="flex md:basis-1/4 p-4 md:m-10 size-11/12">
            <link rel="stylesheet" href="https://mint.highlight.xyz/assets/embed.css" />
            <div data-widget="highlight-mint-card" data-mint-collection-id="663d2717dffb7b3a490f398f" data-theme='{"bgColor":"#000000","textColor":"#ffffff","accentColor":"#9d00ff"}'className="m-auto" ></div>
            <script async={true} type="module" crossOrigin="" src="https://mint.highlight.xyz/assets/embed.js?v=1"></script>
          </div>
        </div>
        <div className="callout">
          <a href="https://nouns.wtf">
            <div className="m-10 text-right">
              Inspired & <br/>
              funded by <br/>
              <Image
                className="nlogo"
                alt="nlogo"
                src="/nlogo.svg"
                objectFit="cover"
                height="40"
                width="40"
              />
            </div>
          </a>
        </div>
      </div>
    </main>

  );
}
