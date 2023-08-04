import ContactUsButton from "../buttons/ContactUsButton";

interface ServiceCardProps {
  title: string;
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-t from-gray to-gray-mid p-4 rounded-lg flex flex-col justify-center items-center w-72">
      <h3 className="text-center text-pearl text-lg font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-light">{description}</p>
      <div className="mt-4">
        <ContactUsButton />
      </div>
    </div>
  );
}
