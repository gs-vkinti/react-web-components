/** @jsxImportSource @emotion/react */
import style from './styles'

import { FC } from 'react'
import cx from 'classnames'
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@mui/material'

import {
  CheckboxIcon,
  CheckboxDisabledIcon,
  CheckboxIndeterminateIcon,
  CheckboxCheckedIcon,
  CheckboxCheckedDisabledIcon
} from '../../assets/icons'

import { ReactNode } from 'react'

export interface CheckboxProps {
  checked: boolean
  indeterminate?: boolean
  onChange: (e: any) => void
  className?: string

  label?: string | ReactNode
  width?: number
  disabled?: boolean
  disableRipple?: boolean
}

const Checkbox: FC<CheckboxProps> = props => {
  const copyProps = { ...props }

  delete copyProps.label

  const cnCheckbox = cx('jeo-checkbox', {
    'jeo-checkbox__checked': props.checked,
    'jeo-checkbox__disabled': props.disabled,
    [props.className as string]: Boolean(props.className)
  })

  return (
    <div css={style(props)}>
      <div className={cnCheckbox}>
        <FormControlLabel
          control={
            <MaterialCheckbox
              color='primary'
              icon={
                !props.disabled ? (
                  <CheckboxIcon width={props.width} />
                ) : (
                  <CheckboxDisabledIcon width={props.width} />
                )
              }
              indeterminateIcon={<CheckboxIndeterminateIcon width={props.width} />}
              checkedIcon={
                !props.disabled ? (
                  <CheckboxCheckedIcon width={props.width} />
                ) : (
                  <CheckboxCheckedDisabledIcon width={props.width} />
                )
              }
              {...copyProps}
            />
          }
          label={props.label}
        />
      </div>
    </div>
  )
}

export default Checkbox
