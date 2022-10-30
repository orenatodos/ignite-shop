import {
  Content as DialogContent,
  Title as DialogTitle
} from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const StyledContent = styled(DialogContent, {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,

  width: '30rem',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  transition: 'right 0.5s ease-in-out'
})

export const StyledCloseButton = styled('button', {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  width: '1.5rem',
  height: '1.5rem',
  color: '$gray300',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 0,

  '&:hover': {
    color: '$gray100'
  },

  svg: {
    width: 'inherit',
    height: 'inherit'
  }
})

export const StyledTitle = styled(DialogTitle, {
  color: '$gray100',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginTop: '1.5rem'
})

export const StyledCartItems = styled('ul', {
  listStyle: 'none',
  overflowY: 'scroll',

  li: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',

    '& + &': {
      marginTop: '1.25rem'
    },

    '.image-box': {
      width: '6.25rem',
      height: '6.25rem',
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      img: {
        objectFit: 'cover'
      }
    },

    '.details': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    },

    strong: {
      color: '$gray300',
      fontSize: '$lg',
      fontWeight: 'normal',
      lineHeight: 1.6
    },

    span: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: 1.6
    },

    button: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: '$green500',
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: '0.5rem',

      '&:hover': {
        color: '$green300'
      }
    }
  }
})

export const StyledFooter = styled('footer', {
  marginTop: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem'
})

export const StyledCartIsEmpty = styled('p', {
  backgroundColor: '$gray900',
  borderRadius: 8,
  color: '$gray100',
  padding: '1rem',
  textAlign: 'center'
})
