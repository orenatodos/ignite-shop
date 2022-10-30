import { styled } from '../../styles'

export const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    marginTop: '3.5rem'
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ProductImages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '6rem'
})

export const ImageBox = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& + &': {
    marginLeft: '-56px'
  },

  img: {
    objectFit: 'cover'
  }
})
