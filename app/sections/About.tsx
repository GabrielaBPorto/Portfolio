import React, { useState } from 'react';
import CircleItem from './CircleItem';
// import "../animations/animate.css";
// import AnimatedBody from "../animations/AnimatedBody";
// import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div id="#about"className="fixed inset-0 z-10">
          {true && (
            <div >
               <CircleItem title="Sobre Mim" content="Desenvolvedora de software, com foco em informática biomédica." type="aboutMe" />
                {/* <CircleItem title="Experiência Profissional" content="Desenvolvedora Web, especializada em logística." type="professionalExperience" /> */}
                {/* <CircleItem title="Experiência Acadêmica" content="Pesquisa em aprendizado de máquina para prever fases do sono." type="academicExperience" /> */}
              {/* <div className="bg-black opacity-10 absolute inset-0" onClick={() => setIsOpen(false)}></div> */}
            </div>
          )}
        </div>
      );
    };

export default About;
