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
    credentials: true,
    origin: ["http://localhost:3000", "https://expensetrackersite.netlify.app", "http://192.168.1.11:3000"],
  })
);
app.get('/', (req, res)=>{
  res.send("origin array add")
})
// routes
app.use("/api/auth", authRoutes);
app.use("/api/list", listRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));