import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="dark-overlay">
        <div className="image-container flex flex-col">
          <div className="flex-col ml-10 mr-10">
            <Image
              priority
              className="name"
              src="/name.png"
              alt="Nounspace"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="contain"
              style={{position: "relative", width: "100%"}}
            />  
          </div>
          <div className="flex mt-20">
            <div className="flex-20 m-10">
              <a href="https://github.com/Nounspace">
                <Image
                  src="/GithubLogo.webp"
                  alt="Github"
                  width="80"
                  height="80"
                /> 
              </a>
            </div>
            <div className="flex-20 m-10">
              <a href="https://warpcast.com/~/channel/nounspace">
                <Image
                  src="/farcaster.png"
                  alt="Warpcast Channel"
                  width="80"
                  height="80"
                /> 
              </a>
            </div>
            <div className="flex-20 m-10">
              <a href="https://prop.house/0x767a3bdf2aa3b3201b794927a997fcf4e50d4702/21">
                <Image
                  src="/prophouse.png"
                  alt="Prophouse Proposal"
                  width="80"
                  height="80"
                /> 
              </a>
            </div>
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
                width="80"
                height="80"
              />
            </div>
          </a>
        </div>
      </div>
    </main>

  );
}
