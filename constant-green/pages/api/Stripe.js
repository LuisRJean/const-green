import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {

        }
        catch (error) {
            res.stauts(500).json({ statusCode: 500, message: error.message });


    } 
    }

}