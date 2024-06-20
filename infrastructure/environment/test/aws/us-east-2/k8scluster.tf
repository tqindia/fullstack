
  module "k8scluster"  {
    layer_name = "test-us-east-2"
    ami_type = "AL2_x86_64"
    k8s_version = "1.26"
    min_nodes = 2
    node_launch_template = [
      {
        
      }
    ]
    vpc_id = "${module.base.vpc_id}"
    env_name = "test-us-east-2"
    control_plane_security_groups = [
      
    ]
    enable_metrics = 
    node_instance_type = "t3.medium"
    spot_instances = 
    source = "tqindia/cops/cloud/module/aws_eks"
    node_disk_size = 20
    kms_account_key_arn = "${module.base.kms_account_key_arn}"
    private_subnet_ids = "${module.base.private_subnet_ids}"
    version = "0.0.1"
    eks_log_retention = 7
    max_nodes = 3
  }
