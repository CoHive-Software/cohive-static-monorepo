import Link from "next/link";

export default function SmallContactUsButton() {

  return (
    <Link href='#contact'>
      <button className="w-fit text-xs bg-gray-xLight hover:bg-yellow py-2 px-3 rounded-lg">Contact Us</button>
    </Link>
  );

};