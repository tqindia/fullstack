
  module "k8scluster"  {
    vpc_id = "${module.base.vpc_id}"
    source = "tqindia/cops/cloud/module/aws_eks"
    control_plane_security_groups = [
      
    ]
    node_disk_size = 20
    private_subnet_ids = "${module.base.private_subnet_ids}"
    version = "0.0.1"
    enable_metrics = 
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    min_nodes = 2
    node_instance_type = "t3.medium"
    node_launch_template = [
      {
        
      }
    ]
    kms_account_key_arn = "${module.base.kms_account_key_arn}"
    ami_type = "AL2_x86_64"
    eks_log_retention = 7
    k8s_version = "1.26"
    max_nodes = 3
    spot_instances = 
  }
