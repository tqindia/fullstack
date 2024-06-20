
  module "base"  {
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_base"
    version = "0.0.1"
    env_name = "test-us-east-2"
    private_ipv4_cidr_blocks = [
      "10.0.128.0/21",
      "10.0.136.0/21",
      "10.0.144.0/21"
    ]
    public_ipv4_cidr_blocks = [
      "10.0.0.0/21",
      "10.0.8.0/21",
      "10.0.16.0/21"
    ]
    total_ipv4_cidr_block = "10.0.0.0/16"
    vpc_log_retention = 90
  }
