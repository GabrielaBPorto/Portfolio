// components/CircleItem.tsx
import styles from './CircleItem.module.css';
import {useState, useEffect} from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import planetTranslation from '../../src/helpers/translation.helper'
import { url } from 'inspector';

interface CircleItemProps {
  title: string;
  content: string;
  type: 'aboutMe' | 'professionalExperience' | 'academicExperience';
}


const getPlanetStyleByType = (type: string) => {
  let planetStyle = '';
  
  switch (type) {
    case 'aboutMe':
      planetStyle = 'aboutMePlanet';
      break;
    case 'professionalExperience':
      planetStyle = 'professionalExperiencePlanet';
      break;
    case 'academicExperience':
      planetStyle = 'academicExperiencePlanet';
      break;
    default:
      planetStyle = '';
      break;
  }

  return planetStyle;
};

const CircleItem: React.FC<CircleItemProps> = ({ title, content, type }) => {
  const [windowSize, setWindowSize] = useState({ width: 2000, height: 2000 });
  gsap.registerPlugin(MotionPathPlugin);


  useEffect(() => {
    planetTranslation(windowSize);
  }, [windowSize])
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const planetStyle = getPlanetStyleByType(type);

  return (
    <div 
    className={`planets ${styles.planetCircle} ${planetStyle}`}>
      <div className="flex items-center justify-center h-full">
        <div className='px-2 py-2 items-center justify-center'>
          <h3 className="flex justify-center text-white text-sm pt-4">{title}</h3>
          <p className="text-white text-xs h-8 overflow-hidden my-2">{content}</p>
          <p className="flex justify-center text-ellipsis pb-4">...</p>
        </div>
      </div>
    </div>
  );
};

export default CircleItem;
