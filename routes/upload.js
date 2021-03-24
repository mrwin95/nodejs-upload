const express = require('express');

const router = express.Router();

const { getHomePage, uploadFile, getFiles } = require('../controllers/upload')

router.route('/')
  // .get(getHomePage)
  .get(getFiles)

router.route('/')
  .post(uploadFile)

module.exports = router;