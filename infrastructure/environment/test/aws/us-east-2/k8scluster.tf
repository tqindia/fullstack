
  module "k8scluster"  {
    source = "tqindia/cops/cloud/module/aws_eks"
    enable_metrics = 
    private_subnet_ids = "${module.base.private_subnet_ids}"
    k8s_version = "1.26"
    node_disk_size = 20
    spot_instances = 
    version = "0.0.1"
    ami_type = "AL2_x86_64"
    eks_log_retention = 7
    node_launch_template = [
      {
        
      }
    ]
    node_instance_type = "t3.medium"
    kms_account_key_arn = "${module.base.kms_account_key_arn}"
    vpc_id = "${module.base.vpc_id}"
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    control_plane_security_groups = [
      
    ]
    max_nodes = 3
    min_nodes = 2
  }
