const express=require('express');


const app=express();
const errormiddleware=require('./middleware/error')
//import routes
const product=require('./routes/productRouter')
const user=require('./routes/userRouter')
const order=require('./routes/orderRouter')
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1",product); 
app.use("/api/v1",user); 
app.use("/api/v1",order)

// Middleware for Errors
app.use(errormiddleware);


module.exports=app;