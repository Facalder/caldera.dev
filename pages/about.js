import Image from 'next/image'

const About = ({ children }) => {
  return (
    <article className='space-y-10'>
      <section className='space-y-6'>
        <div className='space-y-3'>
          <h1 className='heading-1'>About Me</h1>
          <p className='paragraph'>Hi There I am Bla Bla</p>
        </div>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </section>
      <section className='prose prose-gray max-w-none prose-headings:font-BeVietnamPro'>
        {children}
      </section>
    </article>
  )
}

export default About
