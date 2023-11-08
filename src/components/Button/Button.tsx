import { ComponentProps } from 'react'
import { ButtonVariantProps, button } from '../../../styled-system/recipes'
import { cx } from '../../../styled-system/css'

type ButtonProps = ButtonVariantProps & ComponentProps<'button'>

export const Button = ({ intent, size, className, children }: ButtonProps) => {
  console.log(button({ intent, size }))
  return (
    <button className={cx(button({ intent, size }), className)}>
      {children}
    </button>
  )
}
