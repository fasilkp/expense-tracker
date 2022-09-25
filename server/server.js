import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


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


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));