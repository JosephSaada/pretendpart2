import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack'; 
import BuoyancySimulation from '@/components/BuoyancySimulation'; 
import gif from 'public/static/icons/buoyant-force.gif'; 
import image1 from 'public/static/icons/profile.png';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero /> 
        <img src='static\icons\buoyant-force.gif'/>  
        The coin sinks because it is heavy, the sponge because it is light
        <div>  
        </div>
        
        <div className="h-3"></div>

          <Projects /> 
          {/* <BuoyancySimulation />   */}
          <Stack /> 
          <div className="h-3"></div>
          <Contact />
      </div>
    </>
  );
}
