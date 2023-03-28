import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack'; 
import BuoyancySimulation from '@/components/BuoyancySimulation'; 
import gif from 'public/static/icons/buoyant-force.gif';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero /> 
        <img src={gif} alt="buoyant force" />
        <div>  
        {/* <BuoyancySimulation />   */}
        </div>
        animation goes here 
        
        <div className="h-3"></div>

          <Projects />
          <Stack /> 
          <div className="h-3"></div>
          <Contact />
      </div>
    </>
  );
}
