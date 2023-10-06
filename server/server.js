import app from "./app.js";
import dbConnection from "./dbConfig/dbConnection.js";


const PORT =3000


app.listen(PORT,()=>{
    console.log("server is running")
    dbConnection()
})

