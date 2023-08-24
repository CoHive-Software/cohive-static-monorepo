import Image from "next/image";

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

export default function Page() {

  return (
    <div className='flex flex-col justify-center items-center pt-6'>
      {projects.map((project, i) => (
        <div className='flex flex-col items-center mb-2' key={i}>
          <Image
            className='mb-2 rounded-md'
            src={project[0]}
            alt={project[2]}
            key={project[2]}
            width={300}
            height={96} />
          <h2 className='text-pearl'>
            {project[2]}
          </h2>
        </div>
      ))}
    </div>
  );
}