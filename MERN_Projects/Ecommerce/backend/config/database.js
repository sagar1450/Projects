const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  
}

module.exports=connectDatabase;