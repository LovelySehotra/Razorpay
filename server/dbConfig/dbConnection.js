import mongoose from "mongoose";
const MONGDB ='mongodb://127.0.0.1:27017/razorpay'
mongoose.set('strictQuery',false);
const dbConnection = async()=>{
    try {
          const {connection}= await mongoose.connect(MONGDB);
        if(connection)
        {
            console.log(`connect to ${MONGDB}`)
        }
    } catch (error) {
        console.log(error);
    }
}
export default dbConnection