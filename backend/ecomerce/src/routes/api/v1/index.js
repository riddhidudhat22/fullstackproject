const express = require('express')

const router = express.Router();

const categoriesRouter = require('./categories.routes');
router.use("/categories", categoriesRouter)

const subcategoriesRouter = require('./subcategories.routes');
router.use("/subcategories", subcategoriesRouter)

const productRouter = require('./products.routes');
router.use("/products", productRouter)

const variantRouter = require('./variants.routes');
router.use("/variants", variantRouter)

const salespeopleRouter = require('./salespeoples.routes')
router.use("/salespeoples",salespeopleRouter)

const usersRouter = require('./users.routes')
router.use("/users",usersRouter)

module.exports = router;


// const Users = require("../models/users.models");
// const bcrypt = require('bcrypt');

// const ragister = async (req, res) => {
//     try {

//         const { email, password } = req.body

//         const user =await Users.findOne({
//             $or: [{ email }]
//         })

//         if (user) {
//             res.status(409).json({
//                 success: false,
//                 message: "user alredy exist"
//             })
//         }
//         const hashPassword =await bcrypt.hash(password,10)

//         const userData =await Users.create({...req.body,password:hashPassword})

//         if (!userData) {
//             res.status(500).json({
//                 success: false,
//                 message: "create hash password error"
//             })
//         }

//         const userDataF =await Users.findById({_id: userData._id}).select("-password")

//         if (!userDataF) {
//             res.status(500).json({
//                 success: false,
//                 message: "internal server error" +  error.message
//             })
//         }

//         res.status(201).json({
//             success: true,
//             message: "ragister succesfully",
//             data : userDataF
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "internal server error" +  error.message
//         })
//     }
// }

// module.exports = {
//     ragister
// }