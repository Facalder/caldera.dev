import Link from 'next/link'
import { BiCodeAlt } from 'react-icons/bi'

const Category = () => {
  return (
    <>
      <section className='space-y-3'>
        <h1 className='heading-1'>Design and Code</h1>
        <p className='paragraph'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          impedit fugit dolorem perspiciatis laborum exercitationem quibusdam.
          Inventore repudiandae animi omnis, quos minima corporis veritatis,
          fugit eligendi recusandae distinctio, hic quae.
        </p>
      </section>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <Link href='/' className='flex flex-col  border hover:bg-gray-50'>
          <div className='p-4 md:p-5'>
            <div className='flex items-center gap-x-5'>
              <BiCodeAlt size={24} className='text-gray-600' />

              <div className='grow space-y-1'>
                <h2 className='heading-4'>Category</h2>
                <p className='paragraph'>Get Help from 40k bla bla bla</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex flex-col  border hover:bg-gray-50'>
          <div className='p-4 md:p-5'>
            <div className='flex items-center gap-x-5'>
              <BiCodeAlt size={24} className='text-gray-600' />

              <div className='grow space-y-1'>
                <h2 className='heading-4'>Category</h2>
                <p className='paragraph'>Get Help from 40k bla bla bla</p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}

export default Category
