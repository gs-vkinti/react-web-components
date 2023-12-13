/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react'
import { styles } from './styles'
import { SEARCH_BY_NAME } from '../../text'

import cn from 'classnames'

const Search: FC<{}> = () => {
  const [active, setActive] = useState(false)
  const classSearch = cn('joe-search', {
    'joe-search--active': active
  })
  return (
    <div css={styles()}>
      <div className={classSearch}>
        <input
          type='text'
          placeholder={SEARCH_BY_NAME}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
      </div>
    </div>
  )
}
export default Search
