import express  from "express";
import connectToDb from "./connect/mongoose.js";
import userRouter from "./route/user.js";
import itemRouter from "./route/items.js";
import cors from "cors";
const app = express()
await connectToDb();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT || 5000;

app.use("/user",userRouter);
app.use("/item",itemRouter)
app.get('/', function (req, res) {
  res.send('kkkk')
})

app.listen(PORT,()=>{console.log("run api app")});