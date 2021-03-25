const util = require('util');

const multer = require('multer');

const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('path:' + (__basedir + '/share-assets/'));

    cb(null, __basedir)
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  }
});

let uploadFile = multer({
  storage: storage,
  limits: { fieldSize: maxSize }
}).single('file');

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;