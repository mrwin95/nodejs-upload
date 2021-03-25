const uploadFiles = require('../middleware/uploadfile');
const fs = require('fs');
const baseUrl = "http://localhost:8080/files/";

exports.getHomePage = (req, res, next) => {
  res.send('Get home page upload');
}
/**
 * Upload files
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.uploadFile = async (req, res, next) => {
  try {
    await uploadFiles(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: 'Please upload a file' })
    }

    res.status(200).send({ message: 'File Upload successfully ' + req.file.originalname })
  } catch (err) {
    res.status(500).send({ message: `Could not upload the file ${__basedir}, ${err}` })
  }
}

/**
 * 
 */

exports.getFiles = async (req, res, next) => {
  const directoryPath = __basedir + '/assets/images/';

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({
        message: 'Unable to scan files!'
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file
      });
    });

    res.status(200).send(fileInfos);
  })
}