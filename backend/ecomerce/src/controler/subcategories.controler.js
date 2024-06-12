const Subcategories = require("../model/subcategories.model");

const listsubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategories.find();

        if (!subcategories || subcategories.length === 0) {
            res.status(404).send({
                success: false,
                message: 'subcaregorie not found.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'subcategories fetch susscss',
            data: subcategories
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const getsubcategores = async (req, res) => {

    try {
        const subcaregori = await Subcategories.findById(req.params.subcategori_id)

        if (!subcaregori) {
            res.status(404).json({
                success: false,
                message: 'subcaregori not found.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'subcaregori found susscss',
            data: subcaregori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}


const addsubcategories = async (req, res) => {

    try {

        const subcategori = await Subcategories.create(req.body)
        console.log(subcategori);

        if (!subcategori) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Subcategory added successfully',
            data: subcategori
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error: ' + error.message
        });
    }
}

const deletecsubategori = async (req, res) => {

    try {
        const subcategori = await Subcategories.findByIdAndDelete(req.params.subcategori_id)

        if (!subcategori) {
            res.status(404).json({
                success: false,
                message: 'subcategori not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'subcategori deleted successfully',
            data: subcategori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

const updatesubcategori = async (req, res) => {
    try {
        const subcategori = await Subcategories.findByIdAndUpdate(req.params.subcategori_id, req.body, { new: true, runValidators: true })
        if (!subcategori) {
            res.status(400).json({
                success: false,
                message: 'categori not found',
            })
        }
        res.status(200).json({
            success: true,
            message: 'categori update successfully',
            data: subcategori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}


const getsubcategoridatawith = async (req, res) => {
    try {
        const subcaregori = await Subcategories.find({ categori_id: req.params.categori_id })

        if (!subcaregori) {
            res.status(404).json({
                success: false,
                message: 'subcaregori not found.'
            });
        }
        res.status(200).json({
            success: true,
            message: 'subcaregori found susscss',
            data: subcaregori
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error' + error.message
        })
    }
}

module.exports = {
    listsubcategories,
    getsubcategores,
    addsubcategories,
    deletecsubategori,
    updatesubcategori,
    getsubcategoridatawith
}