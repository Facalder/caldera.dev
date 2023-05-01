import Image from 'next/image'

const Uses = () => {
  return (
    <>
      <section className='space-y-6'>
        <div className='space-y-3'>
          <h1 className='heading-1'>Uses</h1>
          <p className='paragraph'>
            This is the equipment I currently use for gaming, programming,
            making videos, and every day.
          </p>
        </div>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </section>
      <section className='space-y-4'>
        <h2 className='heading-2'>Hardware</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='border p-3 transition-all hover:bg-gray-50'>
            <Image
              src='/../public/img/thumbnail.jpg'
              width={400}
              height={600}
              alt='Card Thumbnail'
            />

            <div className='mt-4 space-y-2'>
              <h2 className='heading-5'>Macbook Pro 2020</h2>
              <p className='footnote'>Space Gray</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Uses
