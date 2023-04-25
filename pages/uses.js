import Image from 'next/image'

import Hero from '@/components/partials/Hero'
import Box from '@/layout/container/Box'

const Uses = () => {
  return (
    <>
      <Hero
        title='Omagaa'
        description='muhehehehe'
        src='/../public/img/thumbnail.jpg'
        image={true}
      />
      <Box space='8'>
        <h2>Hello World</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100'>
            <Image
              src='/../public/img/thumbnail.jpg'
              width={400}
              height={200}
              alt='Card Thumbnail'
            />

            <div className='mt-4 space-y-2'>
              <h2 className='text-base font-medium text-gray-800'>
                Unity’s inside sales team drives 80% of its revenue with
                Preline.
              </h2>
              <p className='text-base text-gray-600'>
                The best way to connect a wallet.
              </p>
            </div>
          </div>
          <div className='rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100'>
            <Image
              src='/../public/img/thumbnail.jpg'
              width={400}
              height={200}
              alt='Card Thumbnail'
            />

            <div className='mt-4 space-y-2'>
              <h2 className='text-base font-medium text-gray-800'>
                Unity’s inside sales team drives 80% of its revenue with
                Preline.
              </h2>
              <p className='text-base text-gray-600'>
                The best way to connect a wallet.
              </p>
            </div>
          </div>
          <div className='rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100'>
            <Image
              src='/../public/img/thumbnail.jpg'
              width={400}
              height={600}
              alt='Card Thumbnail'
            />

            <div className='mt-4 space-y-2'>
              <h2 className='text-base font-medium text-gray-800'>
                Unity’s inside sales team drives 80% of its revenue with
                Preline.
              </h2>
              <p className='text-base text-gray-600'>
                The best way to connect a wallet.
              </p>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Uses
