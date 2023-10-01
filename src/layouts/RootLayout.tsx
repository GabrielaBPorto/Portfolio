import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UnderConstruction from '../components/Common/UnderConstruction';
import { SectionVisibility, SectionComponents } from '../enums/SectionVisibility.enum';
import Home from '../components/Sections/Home';
import About from '../components/Sections/About';

const RootLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState<SectionVisibility | null>(null);

  useEffect(() => {
    const it = router.query;
    setCurrentSection(it.section as SectionVisibility);
  }, [router.asPath]);

  const renderSection = () => {
    const activeSections = SectionComponents[SectionVisibility.ACTIVE] || [];
    const sectionToSee =  activeSections.find((active) => active === currentSection)
    if(sectionToSee === 'Home'){
      return <Home key={sectionToSee} />
    }
    else if (sectionToSee === 'About'){
      return <About key={sectionToSee} />
    }
    else{
      const isUnderConstruction = SectionComponents[SectionVisibility.ALL].includes(currentSection)
      if(isUnderConstruction){
        return <UnderConstruction key={currentSection} />
      }
      else{
        if(!!currentSection){
          return <h1>404</h1>
        }
        else{
          return <Home key='Home' />
        }
        
      }
      
    }
  };

  return (
    <div>
      {renderSection()}
      {children}
    </div>
  );
};

export default RootLayout;
