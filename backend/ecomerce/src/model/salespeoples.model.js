
const pool = require("../db/mysqldb")


const salepeoplemodel=async()=>{
    const data=await pool.execute("SELECT * FROM salespeople"); 
    console.log(data);
}

module.exports={
    salepeoplemodel
}