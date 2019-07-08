let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {

    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/test-queue.fifo`,
        AttributeNames: ['SenderId'],
        MaxNumberOfMessages: '20',
        VisibilityTimeout: '50',
        WaitTimeSeconds: '30',
        MessageAttributeNames: ['f']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                    console.log("Success");
                    console.log(data);
                });
            } else {
                // No messages to process
                console.log("No messages");
                console.log(data);
            }
        })
        .catch(err => {
            // error handling goes here
            console.log("error");
            console.log(data);
        });




    callback(null, { "message": "Successfully executed GET" });
}