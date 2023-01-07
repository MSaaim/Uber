const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (event.request.userAttributes.sub) {
    console.log("No user was written to the DynamoDB");
    context.done(null, event);
    return;
  }
  //if we have the sub the user must be saved to the DB

  const date = new Date();
  const params = {
    Item: {
      'id': { S: event.request.userAttributes.sub },
      '__typename': { S: 'User' },
      'username': { S: event.userName },
      'email': { S: event.request.userAttributes.email },
      'createdAt': { S: date.toISOString },
      'updatedAt': { S: date.toISOString },
    },
    TableName: process.env.USERTABLE,
  }

  try {
    await ddb.putItem(params).promise();
    console.log("HUrray");

  } catch (error) {
    console.log("Error", error);
  }
  context.done(null, event);
}
