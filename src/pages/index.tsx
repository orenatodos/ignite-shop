import { GetStaticProps } from 'next'

import type Stripe from 'stripe'

import { stripe } from '../lib/stripe'

import { HomePage, HomePageProps } from '../templates/Home'

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      priceId: price.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}

export default function handler({ products }: HomePageProps) {
  return <HomePage products={products} />
}
