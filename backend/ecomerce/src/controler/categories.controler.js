
const Categories = require("../model/categories.model");

const listcategories = async (req, res) => {
    // console.log("listcategories");
console.log("categori",req.user);
    try {
        const categories = await Categories.find();


        if (!categories || categories.length === 0) {
            res.status(404).send({
                success: false,
                message: 'caregorie not found.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'categories fetch susscss',
            data: categories
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const getcategories = async (req, res) => {

    try {
        const categori = await Categories.findById(req.params.categori_id)
        console.log(categori);

        if (!categori) {
            res.status(404).json({
                success: false,
                message: 'categori not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'categori found successfuly',
            data: categori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const addcategories = async (req, res) => {
    console.log(req.body);
    try {
        const category = await Categories.create(req.body);
        console.log(category);
        if (!category) {
            res.status(400).json({
                success: false,
                message: 'category not created'
            })
        }
        res.status(201).json({
            success: true,
            message: 'category created successfully',
            data: category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const deletecategories = async (req, res) => {
    // console.log(req.params.categori_id);
    try {
        const categori = await Categories.findByIdAndDelete(req.params.categori_id)
        console.log(categori);

        if (!categori) {
            res.status(404).json({
                success: false,
                message: 'categori not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'categori deleted successfully',
            data: categori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const udatecategories = async (req, res) => {
    console.log(req.params.categori_id, req.body);
    try {
        const caategori = await Categories.findByIdAndUpdate(req.params.categori_id, req.body, { new: true, runValidators: true })
        console.log(caategori);

        if (!caategori) {
            res.status(400).json({
                success: false,
                message: 'categori not found',
            })
        }
        res.status(200).json({
            success: true,
            message: 'categori update successfully',
            data: caategori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const activecategory = async (req, res) => {
    const countcategori = await Categories.aggregate([
        {
            $match: {
                "isActive": true
            }

        },
        {
            $count: 'countactivecategories'
        }
    ])
    res.status(200).json({
        success: true,
        message: "countcategori get  succesfully",
        data: countcategori
    })
    console.log(countcategori);
}


const highestnum = async (req, res) => {
    const highestnumproduct = await Categories.aggregate([

        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "categori_id",
                "as": "products"
            }
        },
        {
            $project: {
                categoryName: "$name",
                productCount: { "$size": "$products" }
            }
        },
        {
            $sort: {
                "productCount": -1
            }
        },
        {
            $limit: 3
        }

    ]);
    res.status(200).json({
        success: true,
        message: "highestnumproduct get  succesfully",
        data: highestnumproduct
    })
    console.log(highestnumproduct);
}

const inactivecategory = async (req, res) => {

    const countinactive = await Categories.aggregate([
        {
            $match: {
                "isActive": false
            }

        },
        {
            $count: 'countinactivecategori'
        }
    ]);
    res.status(200).json({
        success: true,
        message: "countinactive get  succesfully",
        data: countinactive
    })
    console.log(countinactive);
}


const averagenuproduct = async (req, res) => {
    const averagenuproduct = await Categories.aggregate([

    ]);
    console.log(averagenuproduct);
}

const countsubcategories = async (req, res) => {
    const countsubcate = await Categories.aggregate([

        {
            $lookup: {
                from: "subcategories",
                localField: "_id",
                foreignField: "categori_id",
                as: "Subacategory"
            }
        },
        {
            $project: {
                _id: 1,
                category_name: "$name",
                countsubcategories: "$Subacategory"
            }
        }

    ]);
    res.status(200).json({
        success: true,
        message: "countsubcate get  succesfully",
        data: countsubcate
    })
    console.log(countsubcate);
}

const subcategorioncategori = async (req, res) => {
    const retviecategoryonsubcate = await Categories.aggregate([

        {
            $lookup: {
                from: "subcategories",
                localField: "_id",
                foreignField: "categori_id",
                as: "subcategories"
            }
        },
        {
            $project: {
                _id: 1,
                category_name: "$name",
                subcategories: "$subcategories"
            }
        }

    ]);
    res.status(200).json({
        success: true,
        message: "retviecategoryonsubcate get  succesfully",
        data: retviecategoryonsubcate
    })

    console.log(retviecategoryonsubcate);
}

module.exports = {
    listcategories,
    getcategories,
    addcategories,
    deletecategories,
    udatecategories,
    activecategory,
    inactivecategory,
    highestnum,
    averagenuproduct,
    countsubcategories,
    subcategorioncategori
}



