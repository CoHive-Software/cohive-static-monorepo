import ContactUsButton from "../buttons/ContactUsButton";

export default function Services() {
  return (
    <div className="flex justify-center items-center p-2">
    <div className="grid grid-cols-1 mx-6 p-2 md:grid-cols-3 gap-4 w-4/5 [&>*]:my-3">
      {/* Custom Software Development */}
      <div className="bg-gradient-to-t from-gray to-gray-mid p-4 rounded-lg flex flex-col justify-center items-center">
        <h3 className="text-center text-pearl text-lg font-bold mb-2">Custom Software Development</h3>
        <p className="text-center text-gray-light">We specialize in creating custom software solutions that meet the unique needs of your business.</p>
        <div className="mt-4">
        <ContactUsButton/>
        </div>
      </div>

      {/* Mobile App Development */}
      <div className="bg-gradient-to-t from-gray to-gray-mid p-4 rounded-lg flex flex-col justify-center items-center">
        <h3 className="text-center text-pearl text-lg font-bold mb-2">Mobile App Development</h3>
        <p className=" text-center text-gray-light">We develop mobile apps for iOS and Android that help businesses reach their customers on-the-go.</p>
        <div className="mt-4">
        <ContactUsButton/>
        </div>
      </div>

      {/* Web Development */}
      <div className="bg-gradient-to-t from-gray to-gray-mid p-4 rounded-lg flex flex-col justify-center items-center">
        <h3 className="text-center text-pearl text-lg font-bold mb-2">Web Development</h3>
        <p className="text-center text-gray-light">We create responsive websites that help businesses establish a strong online presence.</p>
        <div className="mt-4">
        <ContactUsButton/>
        </div>
      </div>
    </div>
    </div>
  );
}