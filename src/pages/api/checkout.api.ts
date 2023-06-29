import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import { Products } from './@types/Products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as Products

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: `${process.env.NEXT_URL}/`,
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    mode: 'payment',
    line_items: products.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: 1,
      }
    }),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
