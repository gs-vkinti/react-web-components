import { memo, useState, useCallback, FC } from 'react'
import debounce from 'lodash/debounce'

import TextField from './'
import { SearchProps } from './TextField.types'
import { Loader, CancelIcon, SearchIcon } from '../../assets/icons'

const Search: FC<SearchProps> = props => {
  const [text, setText] = useState<string>('')

  const debounceOnChange = useCallback(debounce(props.onChange, 500), [props.onChange])

  const getIcon = (): string | JSX.Element => {
    if (props.isBusy) return <Loader />

    if (text) return <CancelIcon onClick={() => onChangeSearch('')} />
    return <SearchIcon />
  }

  const onChangeSearch = (text: string): void => {
    setText(text)
    debounceOnChange(text)
  }

  return (
    <TextField
      {...props}
      value={text}
      onChange={e => onChangeSearch(e.target.value)}
      placeholder={props.placeholder || 'Search'}
      endIcon={getIcon()}
      onClickEndIcon={props.onClickEndIcon}
      onBlur={props.onBlur}
    />
  )
}

export default memo(Search)
