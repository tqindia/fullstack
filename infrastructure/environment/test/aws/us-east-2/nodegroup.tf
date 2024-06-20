
  module "nodegroup"  {
    taints = [
      {
        key = 
        value = 
        effect = "NoEffect"
      }
    ]
    labels = [
      {
        key = 
        value = 
      }
    ]
    max_nodes = 15
    ami_type = "AL2_x86_64"
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_nodegroup"
    node_disk_size = 20
    use_gpu = 
    spot_instances = 
    version = "0.0.1"
    min_nodes = 3
    node_instance_type = "t3.medium"
  }
