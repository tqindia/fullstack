
  module "karpenter"  {
    timeout = 23
    version = "0.0.1"
    atomic = true
    chart_version = "0.37.0"
    dependency_update = 
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/aws_karpenter"
    create_namespace = true
    cleanup_on_fail = true
    wait = true
    wait_for_jobs = true
    values_files = [
      
    ]
    values "settings"  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
      interruptionQueue = "${module.k8scluster.k8s_cluster_name}"
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
    max_history = 16
    env_name = "test-us-east-2"
    repository = "oci://public.ecr.aws/karpenter/karpenter"
  }
