
const Users = require("../model/users.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Tokenaccess = async (_id) => {
    const user = await Users.findById(_id);

    console.log(user);

    const accessToken = await jwt.sign({
        _id: user._id,
        role: user.role,
        expiresIn: "10 hours"
    },
        'gff#hsdgbsugf4&bhj',
        { expiresIn: 60 * 60 });


    const refreshtoken = await jwt.sign({
        _id: user._id
    },
        'jdgf%jhsvg^jhs',
        { expiresIn: "2 days" });

    user.refreshtoken = refreshtoken
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshtoken }

}

const ragister = async (req, res) => {
    // console.log("listcategories");
    try {
        console.log(req.body);

        const { email, password } = req.body
        const user = await Users.findOne(
            { $or: [{ email }] }
        )

        console.log(user);

        if (user) {
           return res.status(409).json({
                success: false,
                message: "user alredy exist"
            })
        }
        console.log(user);

        const hashassword = await bcrypt.hash(password, 10);
        console.log(hashassword);

        if (!hashassword) {
            return res.status(409).json({
                message: "password not match",
                success: false
            })
        }

        const dataf = await Users.create({ ...req.body, password: hashassword })
        if (!dataf) {
            res.status(500).json({
                success: false,
                message: "create hash password error"
            })
        }




        const user1 = await Users.findById({ _id: dataf._id }).select('-password');

        if (!user1) {
            return res.status(500).json({
                success: false,
                message: "internal server error" + error.message
            })
        }

        res.status(201).json({
            success: true,
            message: "ragister succesfully",
            data: user1
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { emali, password } = req.body

        const user = await Users.findOne(
            { $or: [{ emali }] }
        );

        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not exist"
            })
        }
        console.log(password, user.password);

        const validateUser = await bcrypt.compare(password, user.password)
        console.log(validateUser);
        if (!validateUser) {
            return res.status(401).json({
                success: false,
                message: "user not consist"
            })
        }

        const { accessToken, refreshtoken } = await Tokenaccess(user._id)
        console.log(accessToken, refreshtoken);

        const user1 = await Users.findById({ _id: user._id }).select('-password -refreshtoken');

        const option={
            httpOnly:true,
            sequre:true
        }

        res.status(200)
            .cookie("AccessToken",accessToken,option)
            .cookie("refreshtoken",refreshtoken,option)
            .json({
                success: true,
                message: "data fetch successfull",
                data:{
                    user:{...user1.toObject(),accessToken}
                }
            })
    } catch (error) {
        console.log(error);
    }
}

const newtoken=async(req,res)=>{
// console.log(req.body);

    try {
        console.log("body++",req.cookie.refreshtoken);
    } catch (error) {
     console.log(error);   
    }
}

const logout=async(req,res)=>{
    try {
        const user=await Users.findByIdAndUpdate(
            req.body._id,
            {
                $unset:{
                    refreshtoken:1
                }
            },
            {
                new:true
            }
        )
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not login"
            })
        }
        console.log(user);
        res.status(200).json({
            success: true,
            message: "logout successfull",

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"logout fail"
        })
    }
}
module.exports = {
    ragister,
    login,
    newtoken,
    logout
}