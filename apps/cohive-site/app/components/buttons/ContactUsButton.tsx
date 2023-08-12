import Link from "next/link";

export default function ContactUsButton() {

  return (
    <Link href='#contact'>
      <button className="w-fit bg-orange-light hover:bg-yellow py-4 px-12 rounded-xl">Contact Us</button>
    </Link>
  );

};