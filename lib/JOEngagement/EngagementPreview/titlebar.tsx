import { FC } from 'react'
import { ArrowLeftIcon } from '../../assets/icons'

type props = {
  title: string
  description: string
  setViewType: (type: string) => void
}

const TitleBar: FC<props> = ({ title, description, setViewType }) => {
  return (
    <div className='joe-title-bar'>
      <div className='joe-title-bar__back-icon' onClick={() => setViewType('list')}>
        <ArrowLeftIcon />
      </div>

      <div className='joe-title-bar__content'>
        <div className='joe-title-bar__content__title'>{title}</div>

        <div className='joe-title-bar__content__description'>{description}</div>
      </div>
    </div>
  )
}
export default TitleBar
