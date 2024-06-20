
  module "sdfs"  {
    version = "0.0.1"
    extra_iam_policies = [
      "fasdfs"
    ]
    links = [
      "sqs",
      {
        s3 = [
          "write"
        ]
      }
    ]
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    iam_policy = 
    source = "tqindia/cops/cloud/module/aws_iam_user"
  }
