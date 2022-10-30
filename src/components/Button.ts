import { styled } from '../styles'

export const Button = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '1.25rem',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  },

  '&:enabled:hover': {
    backgroundColor: '$green300'
  }
})
