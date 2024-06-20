
  module "nodegroup"  {
    version = "0.0.1"
    node_disk_size = 20
    env_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_nodegroup"
    min_nodes = 3
    labels = [
      {
        key = 
        value = 
      }
    ]
    max_nodes = 15
    layer_name = "test-us-east-2"
    use_gpu = 
    ami_type = "AL2_x86_64"
    node_instance_type = "t3.medium"
    spot_instances = 
    taints = [
      {
        key = 
        value = 
        effect = "NoEffect"
      }
    ]
  }
