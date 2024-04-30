import React from 'react';
import ProjectCards from './ProjectCards';

const Project = () => {
    return (
        <div id="projects"> {/* Add this line with the id attribute */}
            <section class="bg-black">
                <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-green-500 sm:text-4xl animate-bounce">
                            My Project
                        </h2>
                    </div>
                </div>
                <div className=' grid grid-cols-3 gap-14 px-24'>
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </div>

            </section>
        </div>
    )
}

export default Project;
