import ContactUsButton from "../buttons/ContactUsButton";
import ServiceCard from "../cards/serviceCard";

const serviceTypes = [{
  title: 'Custom Software Development',
  description: 'We specialize in creating custom software solutions that meet the unique needs of your business.'
},
{
  title: 'Mobile App Development',
  description: 'We develop mobile apps for iOS and Android that help businesses reach their customers on-the-go.'
},
{
  title: 'Web Development',
  description: 'We create responsive websites that help businesses establish a strong online presence.'
}]

export default function Services() {
  return (
    <div className="flex justify-center items-center p-2 mb-16">
      <div className="grid grid-cols-1 mx-6 p-4 md:grid-cols-3 gap-4 w-4/5 [&>*]:my-3">
        {serviceTypes.map(service => (
          <ServiceCard title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}