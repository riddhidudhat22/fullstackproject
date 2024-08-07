const Joi =require("joi")

const createcategory={
    body:Joi.object().keys({ 
            name:Joi.string().required().uppercase().trim(),
            description:Joi.string().required(),
            image:Joi.string().allow(' ')    
    }),
    // params:Joi.object().keys({ 
    //     categori_id:Joi.string()
    // })
}

module.exports={
    createcategory
}





