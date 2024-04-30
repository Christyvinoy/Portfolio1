import React from 'react';

const Skills = () => {
  return (
    <div id="skills"> {/* Add this line with the id attribute */}
      <section class="bg-black">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-green-500 sm:text-4xl animate-bounce">
              My Skills
            </h2>
            <p class="mt-4 text-base font-normal text-yellow-600 sm:text-xl ">
              Come and know more more my Skills, Education, and more!
            </p>
          </div>

          <div class="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold leading-tight text-green-500 animate-pulse">
                Hobbies
              </h3>
              <p class="text-lg font-normal text-white ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold leading-tight text-green-500 animate-pulse">
                Education
              </h3>
              <p class="text-lg font-normal text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold leading-tight text-green-500 animate-pulse">
                Resume
              </h3>
              <p class="text-lg font-normal text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;
