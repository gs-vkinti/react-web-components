/** @jsxImportSource @emotion/react */
import { FC } from 'react'

import { SELECT_PX_ENGAGEMENT } from '../../text'
import { styles } from './styles'

import cancelIcon from '../../assets/icons/cancel.svg'

type props = {
  onClose: () => void
}
const Header: FC<props> = ({ onClose }) => {
  return (
    <div css={styles()}>
      <div className='joe-header__title'>{SELECT_PX_ENGAGEMENT}</div>
      <div onClick={onClose} className='joe-header__cancel-icon'>
        <img src={cancelIcon} alt='cancel' />
      </div>
    </div>
  )
}

export default Header
