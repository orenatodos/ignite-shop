import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Handbag as HandbagIcon } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'

import { Cart } from '../../components/Cart'
import { CartButton } from '../../components/CartButton'

import logoImg from '../../assets/images/logo.svg'

import * as Styled from './Base.styles'

export function BaseTemplate({ children }: PropsWithChildren<unknown>) {
  const { productsInCart } = useCart()

  const totalProductsInCart = productsInCart.length

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Link href="/">
          <Image src={logoImg} alt="" width={130} height={52} />
        </Link>

        <Cart.Root>
          <Styled.CartButtonWrapper>
            <span>{totalProductsInCart}</span>

            <Cart.Trigger asChild>
              <CartButton variant="secondary" size="sm">
                <HandbagIcon />
              </CartButton>
            </Cart.Trigger>
          </Styled.CartButtonWrapper>

          <Cart.Content />
        </Cart.Root>
      </Styled.Header>

      {children}
    </Styled.Wrapper>
  )
}
