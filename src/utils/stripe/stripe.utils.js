import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  // 使用 process.env 来读取 .env文件里面的内容
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
