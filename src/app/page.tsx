import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/BG.jpeg"
        alt="The Onchain Modular Universe"
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
      />  
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
