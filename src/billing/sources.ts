import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder',
  {
    apiVersion: '2022-11-15'
  }
);

export async function createLegacySource(): Promise<Stripe.Source> {
  return await stripe.sources.create({
    type: 'sepa_debit',
    currency: 'eur'
  });
}
