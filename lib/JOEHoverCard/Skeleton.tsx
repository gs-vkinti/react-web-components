/** @jsxImportSource @emotion/react */
import styles from './styles'

import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const EngagementHoverSkeletonCard = () => {
  return (
    <div css={styles()}>
      <div className='joe-hover-card--image joe-hover-card__skeleton'>
        <Stack spacing={1} direction='column' alignItems='center' justifyContent='center'>
          <Skeleton variant='rounded' width={122} height={105} />
          <Stack spacing={2} direction='row' alignItems='baseline'>
            <Skeleton variant='circular' width={4} height={4} />
            <Skeleton variant='circular' width={4} height={4} />
            <Skeleton variant='circular' width={4} height={4} />
          </Stack>
        </Stack>
      </div>
    </div>
  )
}

export default EngagementHoverSkeletonCard
