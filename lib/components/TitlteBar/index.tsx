/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { ACTIVE_ENGAGEMENTS } from '../../text'
import { styles } from './styles'
import Search from '../Search'

const TitleBar: FC = () => {
  return (
    <div css={styles()}>
      <div className='joe-title-bar'>
        <div className='joe-title-bar__title'>{ACTIVE_ENGAGEMENTS} (107)</div>
        <div className='joe-title-bar__search-sort-filter'>
          <Search />
        </div>
      </div>
    </div>
  )
}
export default TitleBar
