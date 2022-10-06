import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'
import listRoutes from './routes/listRoutes.js'
import connectDB from './config/ConnectDB.js';

const app = express();

connectDB();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);
app.get('/', (req, res)=>{
  res.send(process.env.CLIENT_URL)
})
// routes
app.use("/api/auth", authRoutes);
app.use("/api/list", listRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));