/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };


var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

async function handler(event, context) {
    
    let date = new Date();

    if (event.request.userAttributes.sub) {

        let params = {
          Item: {
            id: { S: event.request.userAttributes.sub },
            __typename: { S: 'User' },
            email: { S: event.request.userAttributes.email },
            createdAt: { S: date.toISOString() },
            updatedAt: { S: date.toISOString() },
          },
          TableName: 'User-2dxx53iherax5my4mov5zw3ewe-dev',
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
            console.log("Lambda's Error", event.request);
	    console.log("Lambda's Error2", event); 		
	}

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
}

module.exports = { handler };

