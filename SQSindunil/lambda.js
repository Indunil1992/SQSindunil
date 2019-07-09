let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {

    sqs.sendMessage({
        MessageBody: 'io',
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/Hiru1T`,
        DelaySeconds: '0',
        MessageAttributes: {}
    }, function (data) {
        console.log("Success");
        console.log(data);
        // your logic (logging etc) to handle successful message delivery, should be here
    }, function (error) {
        console.log("not success");
        console.log(data);
        // your logic (logging etc) to handle failures, should be here
    });



    callback(null, { "message": "Successfully executed new put" });
}