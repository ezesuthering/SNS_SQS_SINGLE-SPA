// Load the AWS SDK for Node.js
const { Consumer } = require('sqs-consumer');
var AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = 'AKIA4W76KMH6GI32GTOT'
const AWS_SECRET_ACCESS_KEY= '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'
// Set the region
AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
var queueURL = "https://sqs.sa-east-1.amazonaws.com/874022330876/test_cola";

const app = Consumer.create({
  queueUrl: queueURL,
  handleMessage: async (message) => {
    console.log(JSON.parse(message.Body).Message)
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.on('timeout_error', (err) => {
 console.error(err.message);
});

app.start();



