import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import sr from '../images/sr.png';

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Sreerag P Mohanan"],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 20,
        delaySpeed: 2000
    });

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <section className="bg-black">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-500">Hi! I'm</h1>
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-500">
                            <span>{text}</span>
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">PCB Designer|Circuit Designer|Electrical Engineer|<br />Hardware Design|Arduino|Basic Coding</p>
                        <button onClick={scrollToContact} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 border-green-500 rounded-lg hover:bg-green-700 ">
                            Ready To Work
                        </button>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex px-8"
                        style={{ marginTop: "-35px" }}>
                        <img src={sr} alt="dp" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
