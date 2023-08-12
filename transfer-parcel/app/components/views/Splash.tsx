import Image from "next/image";
import ContactUsButton from "../buttons/ContactUsButton";

export default function Splash() {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-11/12 mb-9">
      <div className="text-center lg:text-left lg:w-1/2 p-2 flex flex-col flex-wrap justify-center items-center [&>*]:my-5">
        <h1 className="font-serif text-3xl leading-tight tracking-widest sm:text-5xl md:text-6xl text-pearl">We <span className='text-orange-light'>Build</span> Software That <span className='text-orange-light'>Empowers</span> Your<span className='text-orange-light'> Business</span></h1>
        <h2 className="hidden lg:block font-sans tracking-wider text-pearl text-2xl">CoHive Software is a team of experienced developers who specialize in creating custom software solutions for businesses of all sizes. Our mission is to help businesses achieve their goals by providing them with the tools they need to succeed.</h2>
        <ContactUsButton/>
      </div>
      <div className="p-3 mx-14 mt-6 lg:m-6 flex align-center justify-center">
        <Image className="drop-shadow-[0_0_75px_rgba(254,206,60,.5)] md:drop-shadow-[0_0_50px_rgba(254,206,60,0.5)]" src='/circleLogo3.svg' width={500} height={500} alt="beehive" />
      </div>

    </div>
  );
};

