import Stripe from "stripe";

export const stripe = new Stripe(String(process.env.STRIPE_API_KEY));
