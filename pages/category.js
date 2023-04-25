import Link from 'next/link'
import { BiCodeAlt } from 'react-icons/bi'

import Hero from '@/components/partials/Hero'
import Grid from '@/layout/container/Grid'

const Category = () => {
  return (
    <>
      <Hero title='Tags' />
      <Grid>
        <Link
          href='/'
          className='group flex flex-col rounded-lg bg-gray-50  transition-all hover:bg-gray-100'
        >
          <div className='p-4 md:p-5'>
            <div className='flex items-center gap-x-5'>
              <BiCodeAlt size={24} />

              <div className='grow space-y-1'>
                <h2 className='text-lg font-medium text-gray-800'>Category</h2>
                <p className='text-sm text-gray-600'>
                  Get Help from 40k bla bla bla
                </p>
              </div>
            </div>
          </div>
        </Link>
      </Grid>
    </>
  )
}

export default Category
