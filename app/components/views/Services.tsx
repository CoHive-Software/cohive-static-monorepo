import ServiceCard from "../cards/serviceCard";

const serviceTypes = [{
  title: 'Custom Software Development',
  description: 'We specialize in creating custom software solutions that meet the unique needs of your business.',
  logoURL: '/customSoftwareLogo.svg'
},
{
  title: 'Mobile App Development',
  description: 'We develop mobile apps for iOS and Android that help businesses reach their customers on-the-go.',
  logoURL: '/mobileAppDevelopment.svg'
},
{
  title: 'Web Development',
  description: 'We create responsive websites that help businesses establish a strong online presence.',
  logoURL: '/webDevelopment.svg'
}]

export default function Services() {
  return (
    <div className="flex justify-center items-center mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 [&>*]:my-3">
        {serviceTypes.map(service => (
          <ServiceCard title={service.title} description={service.description} logoURL={service.logoURL} />
        ))}
      </div>
    </div>
  );
}