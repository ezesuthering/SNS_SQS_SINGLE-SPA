// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set region
const AWS_ACCESS_KEY_ID = 'AKIA4W76KMH6GI32GTOT'
const AWS_SECRET_ACCESS_KEY= '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'

AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});

// Create publish parameters

var body = {
    clave1: 'valor1',
    clave2: 'valor2'
}
var params = {
  Message: JSON.stringify(body),
  TopicArn: 'arn:aws:sns:sa-east-1:874022330876:test_eze'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log("Message ${params.Message} send sent to the topic ${params.TopicArn}");
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });