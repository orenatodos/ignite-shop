import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/images/logo.svg'

import * as Styled from './Success.styles'

type Product = {
  id: string
  name: string
  images: string[]
}

export type SuccessPageProps = {
  customerName: string
  products: Product[]
}

export function SuccessPage({ customerName, products }: SuccessPageProps) {
  const totalProductsPurchased = products.length

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <Styled.Wrapper>
        <Link href="/">
          <Image src={logoImg} alt="" width={130} height={52} />
        </Link>

        <Styled.ProductImages>
          {products.map((product) => (
            <Styled.ImageBox key={product.id}>
              <Image
                src={product.images[0]}
                alt=""
                width={120}
                height={110}
              />
            </Styled.ImageBox>
          ))}
        </Styled.ProductImages>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {totalProductsPurchased} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </Styled.Wrapper>
    </>
  )
}
