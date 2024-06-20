
  module "karpenter"  {
    source = "tqindia/cops/cloud/module/aws_karpenter"
    cleanup_on_fail = true
    wait_for_jobs = true
    version = "0.0.1"
    repository = "oci://public.ecr.aws/karpenter/karpenter"
    create_namespace = true
    atomic = true
    max_history = 16
    layer_name = "test-us-east-2"
    values_files = [
      
    ]
    timeout = 23
    env_name = "test-us-east-2"
    chart_version = "0.37.0"
    values "settings"  {
      interruptionQueue = "${module.k8scluster.k8s_cluster_name}"
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
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
    dependency_update = 
    wait = true
  }
