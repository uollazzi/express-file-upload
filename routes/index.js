var express = require('express');
var path = require('path');
var router = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    console.log(file);
    const ext = path.extname(file.originalname);
    const fileName = file.originalname.replace(ext, "");

    cb(null, fileName + '_' + uniqueSuffix + ext);
  }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express File Upload' });
});

router.post('/', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.render('index', { title: 'Express File Upload', file: req.file.filename });
})

module.exports = router;
