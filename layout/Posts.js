import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'

import PostCard from '@/components/partials/cards/PostCard'

import Box from './container/Box'
import Grid from './container/Grid'

const Posts = ({ title, showLink }) => {
  return (
    <Box space='8'>
      <h1 className='text-base font-medium text-gray-900'>{title}</h1>

      <Grid>
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>

      {showLink && (
        <div className='flex'>
          <Link
            href='/'
            aria-label='Caldera.dev - Go to Blog Page'
            className='inline-flex items-center gap-x-1 text-base font-medium text-gray-900'
          >
            All Post
            <BiRightArrowAlt />
          </Link>
        </div>
      )}
    </Box>
  )
}

export default Posts
