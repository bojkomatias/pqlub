import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Cta = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText("contact@pqlub.com");
      setWasCopied(true);
      setTimeout(() => {
        setWasCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const mailTo = () => {
    return (
      <a
        href="mailto:contact@pqlub.com"
        className={
          (isHovered ? "" : "hidden") +
          "bg-green flex justify-center items-center text-black p-4 hover:bg-orange hover:text-white"
        }
      >
        <span className="text-lg lg:text-3xl mr-2">NOW!</span>
        <ArrowLongRightIcon className="w-6 h-6 inline-block" />
      </a>
    );
  };

  return (
    <div
      id="cta"
      className="relative transition ease-in-out duration-200 h-screen w-full isolate overflow-hidden bg-black pointer-events-none"
    >
      <div className="absolute inset-x-0 bottom-20">
        <div className="flex flex-col justify-center items-center container mx-auto">
          <h1 className="w-full text-center text-black">Work with us!</h1>
          <Image src="/a.png" alt="contact-image" width={600} height={600} />
          {/* <h2>May be some asset here</h2> */}
        </div>

        <div
          className="px-2 border-solid flex justify-center items-center border-white mx-auto pointer-events-auto"
          id="cta-button"
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-center mt-36 flex text-black bg-green border-black border-2 transition-bg duration-500 ease-in-out transform hover:bg-black hover:text-green cursor-pointer"
          >
            <>
              <p
                onClick={copyToClipboard}
                className="lg:p-8 p-4 text-lg lg:text-3xl"
              >
                {!isHovered
                  ? "HEY YOU!"
                  : wasCopied
                  ? "our email was copied"
                  : "tell us about your project"}
              </p>
              {isHovered ? mailTo() : null}
            </>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] transition ease-in-out duration-700" +
          (isHovered ? " scale-[20.0]" : " scale-75")
        }
        aria-hidden="true"
        id="cta-svg"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="1"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#BFDB38" />
            <stop offset={1} stopColor="#000" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Cta;
