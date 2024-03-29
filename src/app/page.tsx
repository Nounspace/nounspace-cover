import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="dark-overlay">
        <div className="image-container flex flex-col">
          <div className="flex-row ml-10 mr-10">
            <Image
              className="name"
              src="/NAME.PNG"
              alt="Nounspace"
              objectFit="cover"
              quality={100}
            />  
          </div>
          <div className="flex-row mt-20">
            <a href="https://github.com/Nounspace">
              <Image
                src="/GithubLogo.webp"
                alt="Github"
                width="80"
              /> 
            </a>
          </div>
        </div>
      </div>
    </main>

  );
}
