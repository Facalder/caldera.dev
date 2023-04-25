/* eslint-disable tailwindcss/no-custom-classname */

const Grid = ({ children }) => {
  return (
    <div className='mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {children}
    </div>
  )
}

export default Grid
