import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder',
  {
    apiVersion: '2022-11-15'
  }
);

export async function setupRecurringPlan(
  customerId: string,
  planId: string
): Promise<Stripe.Subscription> {
  return await stripe.subscriptions.create({
    customer: customerId,
    plan: planId
  });
}
