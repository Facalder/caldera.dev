import Image from 'next/image'
import Link from 'next/link'

const Example = ({ children }) => {
  return (
    <article className='space-y-10'>
      <section className='space-y-6'>
        <div className='space-y-3 md:space-y-6'>
          <Link
            href='/blog'
            className='heading-4 text-yellow-600 hover:underline'
          >
            Back
          </Link>
          <div className='space-y-3'>
            <h1 className='heading-1'>
              Unity’s inside sales team drives 80% of its revenue with Preline.
            </h1>
            <p className='paragraph flex justify-between'>
              <Link href='/about'>Fa Ainama Caldera Sudibyo</Link>
              <time className='font-bold text-yellow-600'>12 January 2023</time>
            </p>
          </div>
        </div>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </section>
      <section className='prose prose-gray max-w-none prose-headings:font-BeVietnamPro'>
        {children}
      </section>

      <section className='flex gap-4'>
        <Link href='/category'>
          <span className='footnote inline-flex items-center gap-1.5 rounded-md bg-yellow-600 px-3 py-1.5 font-medium text-yellow-100 hover:bg-yellow-700'>
            Category
          </span>
        </Link>
      </section>
    </article>
  )
}

export default Example
