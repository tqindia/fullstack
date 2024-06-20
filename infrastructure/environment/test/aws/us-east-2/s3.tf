
  module "s3"  {
    same_region_replication = 
    bucket_policy = 
    cors_rule = [
      
    ]
    s3_log_bucket_name = 
    source = "tqindia/cops/cloud/module/aws_s3"
    version = "0.0.1"
    bucket_name = "asfsfs"
    block_public = true
    cors_enabled = 
    files = 
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
  }
