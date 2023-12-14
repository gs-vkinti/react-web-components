/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, ReactNode, useState } from 'react'
import cx from 'classnames'

import { TextFieldProps } from './TextField.types'

const getIcon = (icon: string | ReactNode) => {
  return typeof icon === 'string' ? <img src={icon} /> : icon
}

const TextField: FC<TextFieldProps> = props => {
  const [focus, setFocus] = useState(props.focus)
  const [type, setType] = useState(props.type)

  const onClickEndIcon = () => {
    if (props.passwordWithIcons) {
      if (type === 'password') return setType('text')
      return setType('password')
    }

    props.onClickEndIcon?.()
  }

  const cnWrap = cx(
    'joe-textfield__wrap',
    { 'joe-textfield__wrap--focus': focus },
    { 'joe-textfield__wrap--error': props.error },
    { 'joe-textfield__wrap--disabled': props.disabled },
    { 'joe-textfield__wrap--view-only': props.viewOnly },
    { 'joe-textfield__wrap--with-end-icon': props.endIcon },
    { 'joe-textfield__wrap--with-start-icon': props.startIcon },
    { [props.className as string]: props.className }
  )

  const cnStartIcon = cx({ 'joe-textfield__start-icon': props.startIcon })
  const cnEndIcon = cx({ 'joe-textfield__end-icon': props.endIcon || props.passwordWithIcons })

  const endIcon = props.passwordWithIcons
    ? type === 'password'
      ? getIcon('/password-view.svg')
      : getIcon('/password-hide.svg')
    : getIcon(props.endIcon)

  return (
    <div css={styles(props)}>
      <div className='joe-textfield'>
        {props.label && (
          <div className='joe-textfield__label'>
            {props.label}
            {props.required && <span className='joe-textfield__label--required'>*</span>}
          </div>
        )}

        <div className={cnWrap} onClick={props.onWrapperClick}>
          <div className={cnStartIcon}>{props.startIcon}</div>

          <input
            autoFocus={focus}
            type={type}
            value={props.value}
            disabled={props.disabled}
            onChange={props.onChange}
            placeholder={props.placeholder}
            style={props.overrideStyles?.input}
            onFocus={e => {
              setFocus(true)
              props.onFocus && props.onFocus(e)
            }}
            onBlur={e => {
              setFocus(false)
              props.onBlur && props.onBlur(e)
            }}
            autoComplete={props.autoComplete}
            onKeyDown={props.onKeyDown}
          />

          <div className={cnEndIcon} onClick={onClickEndIcon}>
            {endIcon}
          </div>
        </div>
      </div>

      {props.error && props.errorText && <div className='joe-textfield__error'>{props.errorText}</div>}
    </div>
  )
}

TextField.defaultProps = {
  type: 'string',
  focus: false
}

export default TextField
