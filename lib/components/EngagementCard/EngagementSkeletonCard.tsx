/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { memo } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const EngagementSkeletonCard = () => {
  return (
    <div css={styles()}>
      <div className='joe-engagement-card joe-engagement-card__skeleton'>
        <div className='joe-engagement-card__view'>
          <Stack spacing={2} direction='row' alignItems='baseline'>
            <Skeleton variant='rectangular' width={16} height={80} />
            <Skeleton variant='rectangular' width={16} height={50} />
            <Skeleton variant='rectangular' width={16} height={104} />
            <Skeleton variant='rectangular' width={16} height={104} />
          </Stack>
        </div>
        <div className='joe-engagement-card__info'>
          <Stack spacing={2} direction='row'>
            <Skeleton variant='rounded' width={336} height={16} />
          </Stack>

          <Stack spacing={1} direction='row' alignItems='center' sx={{ pt: '8px' }}>
            <Skeleton variant='rounded' width={48} height={16} />
            <Skeleton variant='circular' width={4} height={4} />
            <Skeleton variant='rounded' width={48} height={16} />
            <Skeleton variant='circular' width={4} height={4} />
            <Skeleton variant='rounded' width={48} height={16} />
          </Stack>

          <Stack spacing={2} direction='row' alignItems='center' sx={{ pt: '16px' }}>
            <Skeleton variant='rounded' width={80} height={16} />
            <Skeleton variant='rounded' width={80} height={16} />
            <Skeleton variant='rounded' width={80} height={16} />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default memo(EngagementSkeletonCard)
