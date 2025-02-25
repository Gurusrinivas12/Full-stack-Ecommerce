import express from 'express';
import { placeOrder,placeOrderStripe,placeOrderRazorPay,allOrder,userOrder,updateStatus, verifyStripe } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router();
//Admin
orderRouter.post('/list',adminAuth,allOrder)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorPay)

//User feature
orderRouter.post('/userorders',authUser,userOrder)

//Verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter

