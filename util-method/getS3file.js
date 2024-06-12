const AWS = require('aws-sdk');
const {s3Credentials} = require('../config.json');
AWS.config.update(s3Credentials);
const s3 = new AWS.S3();

const getPatientDetails = async (bucketName, key) => {
    console.log('working')
    const params = {
        Bucket: bucketName,
        Key: key
    };
    try {
        const data = await s3.getObject(params).promise();
        return data.Body;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getPatientDetails
};
