import Splash from './components/views/Splash';
import AboutUs from './components/views/AboutUs'
import Services from './components/views/Services';

export default function Page() {
  return (
    <div className="h-full flex flex-col items-center md:pt-36">
      <Splash />
      {/* <AboutUs /> */}
      <Services />
    </div>
  );
  //<h2 className={'font-sans'}>Hello, CoHive!</h2>

};