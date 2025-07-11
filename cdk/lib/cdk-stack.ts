import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { resolve } from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_22_X,
      code: lambda.Code.fromAsset(resolve("../../lambda-ts/001_sample")),
      handler: "index.handler",
    })

    const api = new apigateway.LambdaRestApi(this, "HelloWorldApi", {
      handler: fn,
      proxy: false,
    })

    const helloResource = api.root.addResource("hello")
    helloResource.addMethod("GET")
  }
}
