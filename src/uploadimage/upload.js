import multer from "multer";
import path from 'path';


const storage = multer.diskStorage({
    destination : './uploads/',
    filename : (req,file,cb ) =>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage : storage,
    fileFilter : (req,file,cb) =>{
        const filteTypes = /jpeg|jpg|png|gif/;
        const extname = filteTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = filteTypes.test(file.mimetype);

        if(mimeType && extname) {
            return cb(null,true)
        }else{
            cb(new Error('Only images are allowed'));
        }
    }
});

export default upload;