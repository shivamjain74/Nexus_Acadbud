const cloudinary = require('cloudinary').v2;
const multer= require('multer');

cloudinary.config({
    cloud_name:'shivam-jain',
    api_key: '954458256415356',
    api_secret: 'rM-sdOcOLtI68u6f29RvzVTs-JM',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };