/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cross-service-example-dataupload.html.

Purpose:
dynamoClient.js is a helper function that creates the Amazon DynamoDB service clients.

Inputs (replace in code):
- us-east-1
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[cross-service.JavaScript.ddb-item-tracker.dynamoClient]

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:b73c58f7-bd23-4682-a95b-f2570b33db8d"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon DynamoDB service client object.
const dynamoClient = new DynamoDBClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

export { dynamoClient };
// snippet-end:[cross-service.JavaScript.ddb-item-tracker.dynamoClient]
