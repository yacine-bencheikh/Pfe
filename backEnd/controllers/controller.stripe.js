require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

module.exports = {
    stripePayment: async (req, res) => {
        try {
            const payment = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: "USD",
                automatic_payment_methods: {
                    enabled: true,
                },
            });
            res.json({ payment: payment.client_secret });
        } catch (error) {
            console.log("Error", error)
            res.json({
                message: "Payment failed",
                success: false
            });
        }
    }
}