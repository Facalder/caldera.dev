import Hero from '@/components/partials/Hero'
import Box from '@/layout/container/Box'

const About = ({ children }) => {
  return (
    <>
      <Hero
        title='About Me'
        description=' Hey, I’m Fa Ainama (Caldera), a self-taught developer, writer and an open source
          enthusiast exploring what’s possible on the web and with software. I like to
          spend my time building projects that interest me, as well as pushing myself to
          learn more through open source projects and share my knowledge with other
          developers.'
        image={true}
        src='/../public/img/thumbnail.jpg'
        alt='Profile Photo'
      />

      <Box>
        <div className='prose max-w-none'>{children}</div>
      </Box>
    </>
  )
}

export default About
