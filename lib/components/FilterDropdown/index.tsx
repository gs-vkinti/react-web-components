/** @jsxImportSource @emotion/react */
import { popoverStyles, styles } from './styles'

import { FC, memo, useState, useMemo, useCallback } from 'react'
import Popover from '@mui/material/Popover'
import cx from 'classnames'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import cloneDeep from 'lodash/cloneDeep'

import { FilterDropdownProps, DropdownOption } from '../../JOEngagement/JOEngagement.types'
import { SmallEqualIcon, SmallDownChevronIcon, SearchIcon } from '../../assets/icons'
import { Checkbox, Tooltip, ListViewTooltip } from '..'
import { SELECT_ALL, SELECTED, ALL } from '../../text'
import Search from '../TextField/Search'

const FilterDropdown: FC<FilterDropdownProps> = props => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)
  const [search, setSearch] = useState<string>('')

  const joeFilterDropdownClassName = cx('joe-filter-dropdown', {
    'joe-filter-dropdown__selected': Boolean(anchorEl)
  })

  const selectedItemsLabels = useMemo(() => {
    return props.options.filter(i => props.selectedItems.includes(i.value)).map(i => i.label)
  }, [props.selectedItems, props.options])

  const displayLabel = useMemo(() => {
    let displayLabel = ALL

    if (selectedItemsLabels.length > 0) {
      displayLabel = selectedItemsLabels[0]
    }

    if (selectedItemsLabels.length > 1) {
      displayLabel += ` + ${selectedItemsLabels.length - 1}`
    }
    return displayLabel
  }, [selectedItemsLabels])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, option: DropdownOption) => {
      const selectedItems = cloneDeep(props.selectedItems)

      if (e.target.checked) {
        if (!selectedItems.includes(option.value)) {
          selectedItems.push(option.value)
          props.setSelectedItems(selectedItems)
        }
      } else {
        const index = selectedItems.indexOf(option.value)
        if (index !== -1) {
          selectedItems.splice(index, 1)
          props.setSelectedItems(selectedItems)
        }
      }
    },
    [props.selectedItems, props.setSelectedItems]
  )

  const onChangeAll = useCallback(
    (checked: boolean) => {
      const selectedItems = checked ? uniq(map(props.options, 'value')) : []
      props.setSelectedItems(selectedItems)
    },
    [props.options, props.setSelectedItems]
  )

  const { isIndeterminate, isAll } = useMemo(() => {
    const uniqueAllValues = uniq(map(props.options, 'value'))

    let isIndeterminate = false
    let isAll = false

    isIndeterminate = Boolean(
      props.selectedItems.length && props.selectedItems.length !== uniqueAllValues.length
    )
    isAll = props.selectedItems.length === uniqueAllValues.length

    return { isIndeterminate, isAll }
  }, [props.selectedItems, props.options])

  const searchedOptions = useMemo(
    () => props.options.filter(o => o.label.toLowerCase().includes(search.toLowerCase())),
    [search, props.options]
  )

  const allCheckboxLabel = useMemo(
    () => (
      <div>
        <div>{SELECT_ALL}</div>
        <div onClick={e => e.preventDefault()}>
          {props.options.filter(i => props.selectedItems?.includes(i.value)).length} / {props.options.length}{' '}
          {SELECTED}
        </div>
      </div>
    ),
    [props.selectedItems, props.options]
  )

  return (
    <div css={styles()}>
      <div className={joeFilterDropdownClassName} onClick={e => setAnchorEl(e.currentTarget)}>
        <div className='joe-filter-dropdown__alphabet'>
          {String.fromCharCode('A'.charCodeAt(0) + props.index)}
        </div>

        <div className='joe-filter-dropdown__options'>
          <div className='joe-filter-dropdown__filter-label'>{props.label}</div>
          <SmallEqualIcon />

          <Tooltip content={<ListViewTooltip defaultText={ALL} items={selectedItemsLabels} />}>
            <div className='joe-filter-dropdown__filter-value'>{displayLabel}</div>
          </Tooltip>
          <SmallDownChevronIcon />
        </div>
      </div>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <div css={popoverStyles()}>
          <div className='joe-filter-popover'>
            <Search
              className='joe-filter-popover__search'
              onChange={setSearch}
              startIcon={<SearchIcon />}
              endIcon={<></>}
            />
            <div className='joe-filter-popover__item joe-filter-popover__item--all'>
              <Checkbox
                label={allCheckboxLabel}
                indeterminate={isIndeterminate}
                checked={isAll}
                onChange={e => onChangeAll(e.target.checked)}
              />
            </div>
            {searchedOptions.map((option, index) => {
              return (
                <div className='joe-filter-popover__item' key={index}>
                  <Checkbox
                    label={option.label}
                    onChange={e => onChange(e, option)}
                    checked={props.selectedItems.includes(option.value)}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default memo(FilterDropdown)
