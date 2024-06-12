const mongoose = require('mongoose');

const atributesubScheema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        value: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        stock: {
            type: Number,
            require: true
        }
    }
)

const variantsScheema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            require: true
        },
        atributes: [atributesubScheema],

        isActive: {
            type: Boolean,
            default: true,

        }
    },

    {
        timestamps: true,
        versionKey: false
    }
)

const Variants = mongoose.model('Variants', variantsScheema)

module.exports = Variants;
