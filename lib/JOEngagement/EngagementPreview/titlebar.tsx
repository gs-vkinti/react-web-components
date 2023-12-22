import { FC } from 'react'
import { ArrowLeftIcon } from '../../assets/icons'

type props = {
  title: string
  description: string
  exitPreview: () => void
}

const TitleBar: FC<props> = ({ title, description, exitPreview }) => {
  return (
    <div className='joe-title-bar'>
      <div className='joe-title-bar__back-icon' onClick={exitPreview}>
        <ArrowLeftIcon />
      </div>

      <div className='joe-title-bar__content'>
        <div className='joe-title-bar__content--title'>{title}</div>

        <div className='joe-title-bar__content--description'>{description}</div>
      </div>
    </div>
  )
}
export default TitleBar
