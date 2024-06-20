
  module "nodegroup"  {
    use_gpu = 
    env_name = "test-us-east-2"
    max_nodes = 15
    taints = [
      {
        key = 
        value = 
        effect = "NoEffect"
      }
    ]
    labels = [
      {
        value = 
        key = 
      }
    ]
    node_disk_size = 20
    spot_instances = 
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_nodegroup"
    version = "0.0.1"
    ami_type = "AL2_x86_64"
    min_nodes = 3
    node_instance_type = "t3.medium"
  }
