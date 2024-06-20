
  module "sqs"  {
    content_based_deduplication = 
    message_retention_seconds = 345600
    fifo = 
    receive_wait_time_seconds = 
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_sqs"
    version = "0.0.1"
    delay_seconds = 
  }
