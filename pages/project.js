import Link from 'next/link'

import ProjectCard from '@/components/cards/ProjectCard'

const Project = () => {
  return (
    <>
      <section className='space-y-3'>
        <h1 className='heading-1'>Project</h1>
        <p className='paragraph'>
          A collection of projects I have worked on. <br />
          PS : I am still designing this page, please visit my{' '}
          <Link
            href='/'
            className='paragraph text-yellow-600 underline hover:text-yellow-800'
          >
            GitHub
          </Link>{' '}
          for better understanding of my work or skills.
        </p>
      </section>

      <section className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <ProjectCard />
        </div>
      </section>
    </>
  )
}

export default Project
