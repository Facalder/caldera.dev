/* eslint-disable tailwindcss/no-custom-classname */
const Box = ({ children, space }) => {
  return <section className={`space-y-${space}`}>{children}</section>
}

export default Box
