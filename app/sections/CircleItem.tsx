// components/CircleItem.tsx
import styles from './CircleItem.module.css';
import {useState, useEffect} from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
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

const calculatePoints = (windowSize: any) =>{

  const a = windowSize.width/3;
  const b = windowSize.height/5;
  const steps = 10000;

  let points: {x: number, y: number}[] = [];
  gsap.to('.aboutMePlanet', {opacity:0})

  const h = windowSize.width*0.45;
  const k = windowSize.height*0.27;
  for (let i = 0; i < steps; i++) {
    const t = i * 2 * Math.PI / steps;
    const pA = h + a * Math.cos(t);
    const pB = k + b * Math.sin(t);
    points.push({ x:pA, y:pB });
  }
  points.push({x:h + a * Math.cos(0), y: k + b * Math.sin(0)})
  
  return points;
}

const planetTranslation = (windowSize: any) => {
  gsap.to('.planets', { opacity: 0 })
  const points = calculatePoints(windowSize);

  const tl = gsap.timeline();
  
    points.reverse();
    gsap.to('.aboutMePlanet', {
      ...points.at(1), duration:0.1
    })
    gsap.to('.aboutMePlanet', {opacity:1, duration:5, delay:2, backgroundImage: 'url("/um-fundo-vermelho-com-ondas-e-um-padrao-de-ondas.jpg")',
    boxShadow: '0px 0px 50px 15px rgba(150,4,4,0.5)',
    msTextSizeAdjust: true})

    gsap.to('.aboutMePlanet', {
      motionPath: points,
      ease: "linear",
      duration: 10,
      repeat: -1,
      delay: 3
    });
    tl.to('.aboutMePlanet', {
      scale: 1.5,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: "none",
      delay: 3
    }, "start");
    
    tl.to(':hover.aboutMePlanet div', {
      textDecoration:'underline',
      duration: 5,
      delay: 3
    }, "start");
}

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
