
  module "autoscaler"  {
    repository = "https://kubernetes.github.io/autoscaler"
    chart_version = "9.37.0"
    dependency_update = 
    cleanup_on_fail = true
    values "autoDiscovery"  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    create_namespace = true
    timeout = 23
    max_history = 16
    source = "tqindia/cops/cloud/module/autoscaler"
    atomic = true
    values_files = [
      
    ]
    wait = true
    wait_for_jobs = true
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    version = "0.0.1"
  }
