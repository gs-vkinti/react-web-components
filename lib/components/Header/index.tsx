/** @jsxImportSource @emotion/react */

import { styles } from './styles'

import { FC } from 'react'

import { SELECT_PX_ENGAGEMENT } from '../../text'
import { CancelIcon } from '../../assets/icons'

type props = {
  onClose: () => void
}

const Header: FC<props> = ({ onClose }) => {
  return (
    <div css={styles()}>
      <div className='joe-header__title'>{SELECT_PX_ENGAGEMENT}</div>
      <div onClick={onClose} className='joe-header__cancel-icon'>
        <CancelIcon />
      </div>
    </div>
  )
}

export default Header
