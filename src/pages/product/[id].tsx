import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'

import { ProductPage, ProductPageProps } from '../../templates/Product'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_Mh4a89efpPAd0H'
        }
      }
    ],
    fallback: true
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const productId = params?.id

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        priceId: price.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100)
      }
    },
    revalidate: 60 * 60 * 1
  }
}

export default function handler({ product }: ProductPageProps) {
  return <ProductPage product={product} />
}
