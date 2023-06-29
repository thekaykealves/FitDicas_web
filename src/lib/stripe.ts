import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_KEY_SECRET as string

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'FitDicas',
  },
})
