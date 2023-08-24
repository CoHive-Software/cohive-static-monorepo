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
  title: 'Website Development',
  description: 'We create responsive websites that help businesses establish a strong online presence.',
  logoURL: '/webDevelopment.svg'
}]

export default function Services() {
  return (
    <div className='flex flex-col justify-center items-center w-11/12 mt-6 lg:mt-0'>

      <h2 className='text-white text-3xl font-light tracking-wider mb-6'>Our <span className='text-orange'>Services</span></h2>
      <div className="w-screen flex justify-center">
        <div className='h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-7/12 mt-3 mb-10' />

      </div>
      <div className="flex justify-center items-center mb-16">
        <div className="flex flex-row flex-wrap justify-center lg: gap-4 [&>*]:my-3">
          {serviceTypes.map(service => (
            <ServiceCard title={service.title} description={service.description} logoURL={service.logoURL} key={service.title}/>
            ))}
        </div>
      </div>
    </div>
  );
}