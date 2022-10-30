import { styled } from '../../styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CartButtonWrapper = styled('div', {
  position: 'relative',

  '& > span': {
    position: 'absolute',
    right: -8,
    top: -8,

    width: '1.5rem',
    height: '1.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$green500',
    boxShadow: '0 0 0 4px var(--colors-gray900)',
    borderRadius: '50%'
  }
})
