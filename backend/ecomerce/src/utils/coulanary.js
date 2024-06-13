// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "dvsblqghc",
    api_key: "724174957425618",
    api_secret: "-WAkUkX8jrWrcJu1nas7NqQbstA" // Click 'View Credentials' below to copy your API secret
});

const updatefile = async (localpath, foldername) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(localpath, {
            folder: foldername
        }).catch((error) => { console.log(error) });

        // console.log(uploadResult);
        return uploadResult
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    updatefile
}