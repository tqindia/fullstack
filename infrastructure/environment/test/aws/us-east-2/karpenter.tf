
  module "karpenter"  {
    atomic = true
    cleanup_on_fail = true
    values_files = [
      
    ]
    values "controller" "resources"  {
      requests  {
        cpu = 1
        memory = "1Gi"
      }
      limits  {
        cpu = 1
        memory = "1Gi"
      }
    }
    values "settings"  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
      interruptionQueue = "${module.k8scluster.k8s_cluster_name}"
    }
    timeout = 23
    version = "0.0.1"
    repository = "oci://public.ecr.aws/karpenter/karpenter"
    chart_version = "0.37.0"
    dependency_update = 
    wait_for_jobs = true
    max_history = 16
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_karpenter"
    create_namespace = true
    wait = true
    env_name = "test-us-east-2"
  }
