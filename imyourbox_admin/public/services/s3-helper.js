const P = require('bluebird');
const parseDataUri = require('parse-data-uri');
const AWS = require('aws-sdk');



function S3Helper() {


AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region:'ap-northeast-2'
});

    this.upload = (rawData, filename) => new P((resolve, reject) => {
      // Create the S3 client.
      const s3Bucket = new AWS.S3({ params: { Bucket: process.env.S3_BUCKET } });
      const parsed = parseDataUri(rawData);
      const base64Image = rawData.replace(/^data:(image|application)\/\w+;base64,/, '');
  
      const data = {
        Key: filename,
        Body: new Buffer.alloc(base64Image, 'base64'),
        ContentEncoding: 'base64',
        ContentDisposition: 'inline',
        ContentType: parsed.mimeType,
      };
      console.log(data);
        // Upload the image.
      s3Bucket.upload(data, (err, response) => {
        if (err) {
          return reject(err);
        }
        console.log(`response : ${response}`)
        return resolve(response);
      });
    });
  }
  
  module.exports = S3Helper;