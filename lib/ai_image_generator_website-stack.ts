import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class AiImageGeneratorWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
      bucketName: "react-app-static-website-bucket-thechuckgroup-com",
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    });

    new s3deploy.BucketDeployment(this, "BucketDeployment", {
      sources: [s3deploy.Source.asset("./website/")],
      destinationBucket: websiteBucket,
    });
  }
}
