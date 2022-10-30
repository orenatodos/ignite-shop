// import { NextApiRequest, NextApiResponse } from 'next'
// import { stripe } from '../../lib/stripe'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { priceId } = req.body

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed.' })
//   }

//   if (!priceId) {
//     return res.status(400).json({ error: 'Price not found.' })
//   }

//   const cancelUrl = `${process.env.APP_URL}/`
//   const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`

//   const checkoutSession = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1
//       }
//     ],
//     cancel_url: cancelUrl,
//     success_url: successUrl
//   })

//   return res.status(201).json({
//     checkoutUrl: checkoutSession.url
//   })
// }

import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

type Product = {
  priceId: string
  quantity: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body

  console.log({ products })

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!products.length) {
    return res.status(400).json({ error: 'Products not found.' })
  }

  const cancelUrl = `${process.env.APP_URL}/`
  const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: products.map((product: Product) => ({
      price: product.priceId,
      quantity: 1
    })),
    cancel_url: cancelUrl,
    success_url: successUrl
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
