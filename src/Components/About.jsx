import React from 'react';
import a from '../images/a.png';

const About = () => {
    return (
        <div id="about" className='flex justify-between items-center'>
            <div className='p-4'>
                <img src={a} alt="side" />
            </div>
            
            <div className='flex flex-col gap-10 items-center text-white py-40 px-20'>
                <div className='text-green-500 font-bold animate-pulse text-8xl px-24'>
                    About
                </div>
                <div>
                    I am a dedicated PCB and circuit designer driven by the challenge <br />
                    of crafting efficient and innovative electronic solutions. With a keen
                    eye for detail, I specialize in designing printed circuit boards (PCBs)<br />
                    and optimizing circuit layouts for functionality and manufacturability.<br />
                    My expertise extends to schematic design, PCB layout, and<br />
                    component selection. Proficient in tools such as Altium Designer, Eagle,<br />
                    and KiCad, I am adept at translating concepts into tangible circuitry.<br />
                    Continuously seeking new techniques and technologies, I am committed<br />
                    to staying at the forefront of electronic design. As a collaborative team<br />
                    member, I thrive in environments where creativity and problem-solving<br />
                    converge to deliver exceptional electronic solutions.
                </div>
            </div>
        </div>
    );
}

export default About;
