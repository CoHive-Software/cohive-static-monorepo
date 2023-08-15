'use client'
import Image from "next/image";
import { useState } from 'react';

const projects = [
  ['/project.svg', '/project.svg', 'Project1'],
  ['/project copy.svg', '/project copy.svg', 'Project2'],
  ['/project copy 2.svg', '/project copy 2.svg', 'Project3'],
  ['/project copy 3.svg', '/project copy 3.svg', 'Project4'],
  ['/project.svg', '/project.svg', 'Project1'],
  ['/project copy.svg', '/project copy.svg', 'Project2'],
  ['/project copy 2.svg', '/project copy 2.svg', 'Project3'],
  ['/project copy 3.svg', '/project copy 3.svg', 'Project4'],
  ['/project.svg', '/project.svg', 'Project1'],
  ['/project copy.svg', '/project copy.svg', 'Project2'],
  ['/project copy 2.svg', '/project copy 2.svg', 'Project3'],
  ['/project copy 3.svg', '/project copy 3.svg', 'Project4'],
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0])

  function selectProject(project) {
    setCurrentProject(project);
  }

  return (
    <div id='projects' className='hidden md:flex flex-col justify-center items-start w-7/12 mb-4'>
      <hr className='h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-full mt-3 mb-10' />
      <h2 className='text-white text-3xl font-light tracking-wider mb-6'>Completed <span className='text-orange'>Projects</span></h2>
      <div className='flex flex-col'>
        <Image
          className='mb-2 rounded-md'
          src={currentProject[0]}
          alt={currentProject[2]}
          width={1065}
          height={610}
        ></Image>
        <div className='flex flex-wrap'>
          {projects.map(project => (
            <div
              className='mr-2 mb-2 cursor-pointer'
              key={project[2]}
              onClick={() => selectProject(project)}
            >
              <Image
                className={`rounded-md max-w-[96px] ${currentProject[0] === project[0] ? 'border border-pearl' : ''
                  }`}
                src={project[1]}
                alt={project[2]}
                layout='responsive'
                width={96}
                height={96}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}