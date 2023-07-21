import Image from "next/image";
import ContactUsButton from "../buttons/ContactUsButton";



export default function Splash() {
  return (
    <div>
      <div>
        <h1>Unlock Limitless Collaboration and Productivity at CoHive</h1>
        <h2>Step into CoHive, your home for innovative software development. We meticulously build bespoke software solutions that drive your business forward in the digital era.</h2>
        <ContactUsButton />
      </div>
      <Image src='/beehiveimage.jpg' width={500} height={500} alt="beehive" />
      </div>
      );
  // Contact us button on this view
};