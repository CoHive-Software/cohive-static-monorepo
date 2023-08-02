import Image from "next/image";
import ContactUsButton from "../buttons/ContactUsButton";

export default function Splash() {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-10/12">
      <div className="text-center lg:text-left lg:w-1/2 mx-6 p-2 flex flex-col flex-wrap justify-center items-center [&>*]:my-3">
        <h1 className="font-serif text-4xl leading-tight tracking-wider sm:text-5xl md:text-6xl text-pearl">We <span className='text-orange-light'>Build</span> Software That <span className='text-orange-light'>Empowers</span> Your<span className='text-orange-light'> Business</span></h1>
        <h2 className="hidden lg:block font-sans text-pearl text-2xl">CoHive Software is a team of experienced developers who specialize in creating custom software solutions for businesses of all sizes. Our mission is to help businesses achieve their goals by providing them with the tools they need to succeed.</h2>
        <ContactUsButton />
      </div>
      <div className="p-3 mx-6 flex align-center justify-center">
        <Image className="drop-shadow-[0_0_100px_rgba(254,206,60,.5)] md:drop-shadow-[0_0_100px_rgba(254,206,60,.3)]" src='/circleLogo3.svg' width={400} height={400} alt="beehive" />
      </div>

    </div>
  );
};

