
const pool = require("../db/mysqldb")


const salepeoplemodel = async () => {
    try {
        const [result, field] = await pool.execute("SELECT * FROM salespeople");
        return result

    } catch (error) {
        console.log(error);
        throw new Error("selsepeople data not fetch", error)
    }
}



const addsalespeoplemodel = async (SNAME, CITY, COMM) => {
    try {
        const [result] = await pool.execute(
            "INSERT INTO salespeople (SNAME, CITY, COMM) VALUES (?, ?, ?)",
            [SNAME, CITY, COMM]
        );
        console.log(result);
        return ({ SNAME, CITY, COMM, SNUM: result.insertId })

    } catch (error) {
        console.error(error);
        throw new Error("selsepeople data not add", error)
    }
};

const deleteselsepeople = async (SNUM) => {
    try {
        const [result] = await pool.execute(
            "DELETE FROM salespeople WHERE  SNUM=?",
            [SNUM]
        );
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        throw new Error("selsepeople data not delete", error)
    }
}



const updatesalespeople = async (SNUM, SNAME, CITY, COMM) => {
    try {
        const [result] = await pool.execute(
            "UPDATE salespeople SET SNAME = ?, CITY = ?, COMM = ? WHERE SNUM = ?",
            [SNAME, CITY, COMM, SNUM]
        );
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Salespeople data not updated", error);
    }
};

module.exports = {
    salepeoplemodel,
    addsalespeoplemodel,
    deleteselsepeople,
    updatesalespeople
}
