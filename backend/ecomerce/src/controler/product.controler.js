const upload = require("../middleware/upload");
const Products = require("../model/products.model");
const { updatefile } = require("../utils/coulanary");

const listproducts = async (req, res) => {
    console.log("listproduct");
    try {
        const product = await Products.find();

        if (!product || product.length === 0) {
            res.status(404).json({
                success: false,
                message: 'product not found.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'product fetch susscss',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const addproducts = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const filename = await updatefile(req.file.path, 'product')
    console.log(filename);

    try {
        const product = await Products.create(
            {
                ...req.body,
                image: {
                    public_id: filename.public_id,
                    url: filename.url
                }
            }
        )
        console.log(product);

        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        res.status(201).json({
            success: true,
            message: 'product added successfully',
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error: ' + error.message
        });
    }
}

const getproducts = async (req, res) => {
    try {
        const product = await Products.findById(req.params.product_id)
        console.log(product);

        if (!product) {
            res.status(404).json({
                success: false,
                message: 'product not found.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'product found susscss',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const deleteproduct = async (req, res) => {
    console.log("deletecsubategori");
    try {
        const product = await Products.findByIdAndDelete(req.params.product_id)
        console.log(product);


        if (!product) {
            res.status(404).json({
                success: false,
                message: 'product not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'product deleted successfully',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const udateproduct = async (req, res) => {

    console.log(req.params.product_id, req.body, req.file);

    if (req.file) {
        console.log("new file");

        const filename = await updatefile(req.file.path, 'product')
        console.log(filename);

        const updatedProductData = {
            ...req.body,
            image: {
                public_id: filename.public_id,
                url: filename.url
            }
        };

        const product = await Products.findByIdAndUpdate(req.params.product_id, updatedProductData, { new: true, runValidators: true });

        if (!product) {
            res.status(400).json({
                success: false,
                message: 'product not found',
            })
        }
        res.status(200).json({
            success: true,
            message: 'product update successfully',
            data: product
        })
    } else {
        console.log("old file");
        try {
            const product = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true, runValidators: true })
            console.log(product);

            if (!product) {
                res.status(400).json({
                    success: false,
                    message: 'product not found',
                })
            }
            res.status(200).json({
                success: true,
                message: 'product update successfully',
                data: product
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal error' + error.message
            })
        }
    }
    // try {
    //     const product = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true, runValidators: true })
    //     console.log(product);

    //     if (!product) {
    //         res.status(400).json({
    //             success: false,
    //             message: 'categori not found',
    //         })
    //     }
    //     res.status(200).json({
    //         success: true,
    //         message: 'categori update successfully',
    //         data: product
    //     })
    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: 'Internal error' + error.message
    //     })
    // }
}
const getproducttawith = async (req, res) => {
    try {
        const product = await Products.find({ subcategori_id: req.params.subcategori_id })

        if (!product) {
            res.status(404).json({
                success: false,
                message: 'product not found.'
            });
        }
        res.status(200).json({
            success: true,
            message: 'product found susscss',
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const searchName = async (req, res) => {

    const products = await Products.aggregate([
        {
            $match: {
                "name": /^[a-zA-Z0-9!@#$&()`.+,/"-]*$/
            }
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const productsByCategory = async (req, res) => {

    const products = await Products.aggregate([

        {
            $lookup: {
                from: "categories",
                localField: "categori_id",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $unwind: {
                path: "$category"
            }
        },
        {
            $project: {
                "name": 1,
                "image.url": 1,
                "category": 1
            }
        }

    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const productsBySubcategory = async (req, res) => {

    const products = await Products.aggregate([
        {
            $lookup: {
                from: "subcategories",
                localField: "subcategori_id",
                foreignField: "_id",
                as: "subcategory"
            }
        },
        {
            $unwind: {
                path: "$subcategory"
            }
        },
        {
            $project: {
                "name": 1,
                "image.url": 1,
                "subcategory": 1
            }
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const topRate = async (req, res) => {

    const products = await Products.aggregate([

        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "product_id",
                as: "review"
            }
        },
        {
            $unwind: {
                path: "$review"
            }
        },
        {
            $group: {
                _id: "$_id",
                "product_name": { $first: "$name" },
                "Totalrating": {
                    $sum: "$review.rating"
                }
            }
        },
        {
            $sort: {
                "Totalrating": -1
            }
        },
        {
            $limit: 1
        }

    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const newArrivals = async (req, res) => {

    const products = await Products.aggregate([
        {
            $sort: {
                "createdAt": -1
            }
        },
        {
            $limit: 3
        }
    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

const countCategories = async (req, res) => {

    const products = await Products.aggregate([

        {
            $lookup: {
                from: "categories",
                localField: "categori_id",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $unwind: {
                path: "$category"
            }
        },
        {
            $group: {
                _id: "$category._id",
                "category_name": { $first: "$category.name" },
                "product_name": { $push: "$name" },
                "TotalProduct": {
                    $sum: 1
                }
            }
        }

    ])

    res.status(200).json({
        success: true,
        message: "Products get  succesfully",
        data: products
    })

    console.log(products);

}

module.exports = {
    listproducts,
    addproducts,
    getproducts,
    deleteproduct,
    udateproduct,
    getproducttawith,
    searchName,
    productsByCategory,
    productsBySubcategory,
    topRate,
    newArrivals,
    countCategories
}