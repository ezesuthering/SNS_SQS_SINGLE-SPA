var AWS = require('aws-sdk');
const AWS_ACCOUNT_DATA = require('./credentials.js');

AWS.config.update({
    region: 'sa-east-1',
    accessKeyId: AWS_ACCOUNT_DATA.AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_ACCOUNT_DATA.AWS_SECRET_ACCESS_KEY
});

//Message
var body = {
    key1: 'value1',
    key2: 'value2'
}
var params = {
  Message: JSON.stringify(body),
  TopicArn: AWS_ACCOUNT_DATA.TOPIC_ARN
};

var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

publishTextPromise.then(
  function(data) {
    console.log("Message ${params.Message} send sent to the topic ${params.TopicArn}");
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });