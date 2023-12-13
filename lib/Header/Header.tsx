/** @jsxImportSource @emotion/react */
import { FC } from 'react'

import { SELECT_PX_ENGAGEMENT } from '../text'
import { styles } from './styles'

import cancelIcon from './icons/cancel.svg'

type props = {
  onClose: () => void
}
const Header: FC<props> = ({ onClose }) => {
  return (
    <div css={styles()}>
      <div className='header--text'>{SELECT_PX_ENGAGEMENT}</div>
      <div onClick={onClose} className='header--close-icon'>
        <img src={cancelIcon} alt='cancel' />
      </div>
    </div>
  )
}

export default Header
