/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import Button from '@mui/material/Button'

import { styles } from './styles'
import { SELECT, CANCEL } from '../../text'

type props = { action: () => void; secondaryAction: () => void }

const Footer: FC<props> = props => {
  return (
    <div css={styles()}>
      <div className='joe-preview__footer'>
        <Button variant='outlined' onClick={props.secondaryAction}>
          {CANCEL}
        </Button>
        <Button variant='contained' onClick={props.action}>
          {SELECT}
        </Button>
      </div>
    </div>
  )
}
export default Footer
