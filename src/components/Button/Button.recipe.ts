import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'ftv-button',
  description: 'Button component',
  base: {
    display: 'flex',
  },
  variants: {
    intent: {
      primary: {
        bg: 'white',
        color: 'black',
      },
      danger: {
        bg: 'red',
        color: 'white',
      },
      warning: {
        bg: 'yellow',
        color: 'black',
      },
      outline: {
        bg: 'transparent',
        color: 'black',
        border: '1px solid black',
      },
    },
    size: {
      small: {
        padding: '2',
        fontSize: 'xs',
      },
      medium: {
        padding: '4',
        fontSize: 'sm',
      },
      large: {
        padding: '6',
        fontSize: 'md',
      },
    },
  },
  compoundVariants: [
    {
      intent: 'danger',
      size: 'large',
      css: {
        border: '3px solid black',
      },
    },
  ],
  defaultVariants: {
    intent: 'danger',
    size: 'medium',
  },
})
