/* eslint-disable tailwindcss/no-custom-classname */
const SectionContainer = ({ children }) => {
  return (
    <main className='mx-auto max-w-2xl space-y-8 px-6 py-8 md:space-y-12 md:px-3 md:py-16'>
      {children}
    </main>
  )
}

export default SectionContainer
