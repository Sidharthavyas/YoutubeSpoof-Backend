 import { v2 as cloudinary} from "cloudinary";
 import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
        api_key:  process.env.CLOUDINARY_API_KEY,

        api_secret:  process.env.CLOUDINARY_API_SECRET
    });

    const uploadToCloudinary = async (localFilePath) => {
        try {
            //upload file to cloudinary
            if(!localFilePath) return null
          const response=await  cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto",

            })//file uploaded to cloudinary
            console.log("file uploaded to cloudinary")
            response.url
            return response
        }       catch (error) {
           fs.unlinkSync(localFilePath)  //delete file from local storage
           return null
        }   
    }

    export {uploadToCloudinary}