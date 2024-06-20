
  module "autoscalers"  {
    repository = "https://kubernetes.github.io/autoscaler"
    max_history = 16
    layer_name = "test-us-east-2"
    version = "0.0.1"
    timeout = 23
    create_namespace = true
    chart_version = "9.37.0"
    values "autoDiscovery"  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    wait = true
    source = "tqindia/cops/cloud/module/autoscaler"
    namespace = "autoscaler"
    atomic = true
    cleanup_on_fail = true
    values_files = [
      
    ]
    dependency_update = 
    wait_for_jobs = true
    env_name = "test-us-east-2"
  }
