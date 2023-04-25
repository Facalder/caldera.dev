import Hero from '@/components/partials/Hero'
import Posts from '@/layout/Posts'

const Home = () => {
  return (
    <>
      <Hero
        title='Fa Ainama Caldera Sudibyo'
        description=' Brain dumps, explorations, and how-to guides. I write about different
      topics, such as frontend, accessibility, start ups and user/dev
      experience.'
        image={false}
      />
      <Posts title='Latest Post' showLink={true} />
    </>
  )
}

export default Home
