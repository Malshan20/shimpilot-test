import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder',
  {
    apiVersion: '2022-11-15'
  }
);

export async function processPayment(
  token: string,
  amount: number
): Promise<Stripe.Charge> {
  return await stripe.charges.create({
    amount,
    currency: 'usd',
    source: token,
    description: 'Legacy Charge Test'
  });
}
