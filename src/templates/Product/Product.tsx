import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useCart } from '../../hooks/useCart'

import { BaseTemplate } from '../Base'

import { Button } from '../../components/Button'

import * as Styled from './Product.styles'

type Product = {
  id: string
  priceId: string
  name: string
  description: string
  imageUrl: string
  price: string
}

export type ProductPageProps = {
  product: Product
}

export function ProductPage({ product }: ProductPageProps) {
  const { addProductToCart } = useCart()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <span>Carregando...</span>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <BaseTemplate>
        <Styled.Wrapper>
          <Styled.ImageBox>
            <Image
              src={product.imageUrl}
              alt=""
              width={520}
              height={480}
            />
          </Styled.ImageBox>

          <Styled.ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.price}0</span>

            <p>{product.description}</p>

            <Button
              type="button"
              onClick={() => addProductToCart(product)}
            >
              Colocar na sacola
            </Button>
          </Styled.ProductDetails>
        </Styled.Wrapper>
      </BaseTemplate>
    </>
  )
}
