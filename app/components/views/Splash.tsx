import Image from "next/image";
import ContactUsButton from "../buttons/ContactUsButton";

export default function Splash() {
  return (
    <div className="flex justify-center h-full">
      <div className="w-1/2 mx-6 p-3 flex flex-col flex-wrap justify-center items-center [&>*]:my-3">
        <h1 className="font-serif text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pearl to-orange">We Build Software That Empowers Your Business</h1>
        <h2 className="font-sans text-pearl text-2xl">CoHive Software is a team of experienced developers who specialize in creating custom software solutions for businesses of all sizes. Our mission is to help businesses achieve their goals by providing them with the tools they need to succeed.</h2>
        <ContactUsButton />
      </div>
      <div className=" p-3 mx-6 flex flex-col justify-center content-center">

        <Image className="drop-shadow-[0_0_100px_rgba(254,206,60,.5)]" src='/circleLogo3.svg' width={400} height={400} alt="beehive" />
      </div>

    </div>
  );
  // Contact us button on this view
};

