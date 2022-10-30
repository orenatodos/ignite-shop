import { GetServerSideProps } from 'next'

import { stripe } from '../lib/stripe'

import { SuccessPage, SuccessPageProps } from '../templates/Success'

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = query.session_id as string

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map(
    (item) => item.price?.product
  )

  return {
    props: {
      customerName,
      products
    }
  }
}

export default function handler({
  customerName,
  products
}: SuccessPageProps) {
  return <SuccessPage customerName={customerName} products={products} />
}
