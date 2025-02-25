import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb1.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

// ❗️ Add this middleware to catch errors
app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err)  // Log error in Vercel
    res.status(500).json({ message: "Internal Server Error" })
})

// ❗️ Change from app.listen() to export for Vercel
export default app
