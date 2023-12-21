import { ReactNode } from 'react'

export interface TextFieldProps {
  type?: string
  value: string | number
  onChange: (e: any) => void
  onKeyDown?: (e: any) => void

  inputRef?: any
  label?: string
  focus?: boolean
  error?: boolean
  disabled?: boolean
  viewOnly?: boolean
  errorText?: string
  className?: string
  placeholder?: string

  endIcon?: ReactNode
  onClickEndIcon?: () => void
  startIcon?: ReactNode

  onBlur?: (e: any) => void
  onFocus?: (e: any) => void
  onWrapperClick?: (e: any) => void

  orientation?: 'vertical' | 'horizontal'
  inputWidth?: string
  inputHeight?: string
  inputBGColor?: string
  inputColor?: string
  marginTop?: number
  borderRadius?: string
  overrideStyles?: any

  autoComplete?: string
  passwordWithIcons?: boolean
  required?: boolean
}

export interface SearchProps extends Omit<TextFieldProps, 'value'> {}
