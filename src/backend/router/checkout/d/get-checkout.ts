import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function getSessionById(id: string) {
  if (!id.startsWith('cs_')) {
    throw Error('Incorrect CheckoutSession ID.')
  }
  const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(id, {
    expand: ['payment_intent'],
  })

  return checkout_session
}
