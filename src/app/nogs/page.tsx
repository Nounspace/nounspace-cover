"use client"
import Script from "next/script";

const NOGs = () => {
  global.Buffer = Buffer;

  return (
    <>
      <link rel="stylesheet" href="https://mint.highlight.xyz/assets/embed.css" />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <div data-widget="highlight-mint-page" data-mint-collection-id="663d2717dffb7b3a490f398f" ></div>
        <script async={true} type="module" crossOrigin="" src="https://mint.highlight.xyz/assets/embed.js?v=1"></script>
      </main>
    </>
  );
};

export default NOGs;
