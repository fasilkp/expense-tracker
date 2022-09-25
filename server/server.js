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
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.get('/', (req, res)=>{
  res.send("app running successfull")
})
// routes
app.use("/api/auth", authRoutes);
app.use("/api/list", listRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));