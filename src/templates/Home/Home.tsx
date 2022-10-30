import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag as HandbagIcon } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'

import { BaseTemplate } from '../Base'

import { CartButton } from '../../components/CartButton'

import 'keen-slider/keen-slider.min.css'

import * as Styled from './Home.styles'

type Product = {
  id: string
  priceId: string
  name: string
  imageUrl: string
  price: string
}

export type HomePageProps = {
  products: Product[]
}

export function HomePage({ products }: HomePageProps) {
  const { addProductToCart } = useCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <BaseTemplate>
        <Styled.Wrapper ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <Styled.Product
              as={Link}
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
              className="keen-slider__slide"
            >
              <Image
                src={product.imageUrl}
                alt=""
                width={520}
                height={480}
              />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <CartButton
                  aria-label="Adicionar produto ao carrinho"
                  onClick={() => addProductToCart(product)}
                >
                  <HandbagIcon />
                </CartButton>
              </footer>
            </Styled.Product>
          ))}
        </Styled.Wrapper>
      </BaseTemplate>
    </>
  )
}
