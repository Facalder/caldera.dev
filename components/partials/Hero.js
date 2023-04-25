import Image from 'next/image'

import Box from '@/layout/container/Box'

const Hero = ({ title, description, image, src, alt }) => {
  return (
    <Box space='8'>
      <h1 className='text-base font-medium text-gray-900'>{title}</h1>
      <p className='text-base text-gray-600'>{description}</p>
      {image && (
        <Image
          src={src}
          width={200}
          height={200}
          alt={alt}
          className='w-full rounded-lg'
        />
      )}
    </Box>
  )
}

export default Hero
