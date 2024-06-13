
const Categories = require("../model/categories.model");

const listcategories = async (req, res) => {
    // console.log("listcategories");

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
    console.log(req.file);
    // try {
    //     const category = await Categories.create(req.body);
    //     console.log(category);
    //     if (!category) {
    //         res.status(400).json({
    //             success: false,
    //             message: 'category not created'
    //         })

    //     }

    //     res.status(201).json({
    //         success: true,
    //         message: 'category created successfully',
    //         data: category
    //     })
    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: 'Internal error' + error.message
    //     })
    // }
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
    console.log(req.params.categori_id,req.body);
    try {
      const caategori=await Categories.findByIdAndUpdate(req.params.categori_id,req.body,{new:true,runValidators:true})  
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
module.exports = {
    listcategories,
    getcategories,
    addcategories,
    deletecategories,
    udatecategories
}



