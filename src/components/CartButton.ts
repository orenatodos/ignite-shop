import { styled } from '../styles'

export const CartButton = styled('button', {
  border: 0,
  borderRadius: 6,
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
        color: '$gray100',

        '&:hover': {
          backgroundColor: '$green300'
        }
      },

      secondary: {
        backgroundColor: '$gray800',
        color: '$gray300',

        '&:hover': {
          backgroundColor: '$green900'
        }
      }
    },

    size: {
      sm: {
        width: '3rem',
        height: '3rem',

        svg: {
          width: '1.5rem',
          height: '1.5rem'
        }
      },

      md: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          width: '2rem',
          height: '2rem'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
