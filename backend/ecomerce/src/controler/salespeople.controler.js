const { salepeoplemodel } = require("../model/salespeoples.model")


const listselspeople=async(req,res)=>{
    try {
        const people= await salepeoplemodel();
    } catch (error) {
        
    }
}

module.exports={
    listselspeople
}