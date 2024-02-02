import { FC, useState } from 'react'
import Pagination from '../../components/Pagination'

type props = { slides: string[] }

const Slideshow: FC<props> = ({ slides }) => {
  const [page, setPage] = useState<number>(1)
  return (
    <div className='joe-slideshow'>
      <div className='joe-slideshow__slide'>
        <img alt='image' src={slides[page]} />
      </div>
      <Pagination page={page} count={slides.length} onChange={(_, p) => setPage(p)} />
    </div>
  )
}
export default Slideshow
