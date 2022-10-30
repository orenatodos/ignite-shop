import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X as CloseIcon } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'

import { Button } from '../Button'

import {
  StyledCartIsEmpty,
  StyledCartItems,
  StyledCloseButton,
  StyledContent,
  StyledFooter,
  StyledTitle
} from './Cart.styles'

export function CartContent() {
  const { productsInCart, removeProductToCart } = useCart()
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] =
    useState(false)

  async function handleBuyProducts() {
    try {
      setIsCreateCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: productsInCart
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch {
      setIsCreateCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout.')
    }
  }

  const cartIsEmpty = !productsInCart.length
  const buttonIsDisabled = cartIsEmpty || isCreateCheckoutSession

  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <StyledContent>
        <Dialog.Close asChild>
          <StyledCloseButton type="button">
            <CloseIcon />
          </StyledCloseButton>
        </Dialog.Close>

        <StyledTitle>Sacola de compras</StyledTitle>

        {cartIsEmpty ? (
          <StyledCartIsEmpty>
            O carrinho de compras está vazio.
          </StyledCartIsEmpty>
        ) : (
          <StyledCartItems>
            {productsInCart.map((product) => (
              <li key={product.id}>
                <Link href={`/product/${product.id}`} prefetch={false}>
                  <div className="image-box">
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={94}
                      height={94}
                    />
                  </div>
                </Link>

                <div className="details">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>

                  <button
                    type="button"
                    aria-label="Remover produto da sacola"
                    onClick={() => removeProductToCart(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </StyledCartItems>
        )}

        <StyledFooter>
          <div>
            <div></div>
            <div></div>
          </div>

          <Button
            type="button"
            onClick={handleBuyProducts}
            disabled={buttonIsDisabled}
          >
            Finalizar compra
          </Button>
        </StyledFooter>
      </StyledContent>
    </Dialog.Portal>
  )
}

export const Cart = {
  Root: Dialog.Root,
  Content: CartContent,
  Trigger: Dialog.Trigger
}
