import ProjectCard from '@/components/partials/cards/ProjectCard'
import Hero from '@/components/partials/Hero'
import Grid from '@/layout/container/Grid'

const Project = () => {
  return (
    <>
      <Hero
        title='My Project'
        description='The list of my projects. Everything was made with ❤️'
      />
      <Grid>
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </>
  )
}

export default Project
