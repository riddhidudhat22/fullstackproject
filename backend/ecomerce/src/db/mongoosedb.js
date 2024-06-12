const mongoose = require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://ridhdhidudhat2003:riddhi22@cluster0.pggha7c.mongodb.net/ecommerce')
        .then(()=>{console.log('mongoDB conetion success')})
        .catch((error)=>{console.log("mongoDB conection error"+error)})
    } catch (error) {
        console.log("mongoDB conection error"+error);
    }
}

module.exports=connectDB