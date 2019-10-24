const { Consumer } = require('sqs-consumer');
var AWS = require('aws-sdk');
const AWS_ACCOUNT_DATA = require('./credentials.js');

AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: AWS_ACCOUNT_DATA.AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_ACCOUNT_DATA.AWS_SECRET_ACCESS_KEY
});

const app = Consumer.create({
  queueUrl: AWS_ACCOUNT_DATA.QUEUE_URL,
  //Handling message
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



