
  module "autoscalers"  {
    namespace = "autoscaler"
    create_namespace = true
    atomic = true
    version = "0.0.1"
    values "autoDiscovery"  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    timeout = 23
    repository = "https://kubernetes.github.io/autoscaler"
    dependency_update = 
    wait = true
    layer_name = "test-us-east-2"
    cleanup_on_fail = true
    chart_version = "9.37.0"
    values_files = [
      
    ]
    wait_for_jobs = true
    max_history = 16
    env_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/autoscaler"
  }
