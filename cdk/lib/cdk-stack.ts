import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { resolve } from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new NodejsFunction(this, "MyFunction", {
      entry: resolve(__dirname, "../../lambda-ts/", "001_sample", "index.ts"),
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "handler",
      bundling: {
        minify: true,
        sourceMap: true,
        target: "es2020",
      }
    })
  }
}
