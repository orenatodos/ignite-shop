import { styled } from '../../styles'

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto'
})

export const ImageBox = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl'
  },

  span: {
    color: '$green300',
    fontSize: '$2xl',
    display: 'block',
    marginTop: '1rem'
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: '2.5rem',
    color: '$gray300'
  },

  button: {
    marginTop: 'auto'
  }
})
