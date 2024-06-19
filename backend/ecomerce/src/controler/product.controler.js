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
module.exports = {
    listproducts,
    addproducts,
    getproducts,
    deleteproduct,
    udateproduct
}