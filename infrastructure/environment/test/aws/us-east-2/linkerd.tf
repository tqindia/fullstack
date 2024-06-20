
  module "linkerd"  {
    atomic = true
    dependency_update = 
    source = "tqindia/cops/cloud/module/linkerd"
    version = "0.0.1"
    wait = true
    max_history = 16
    env_name = "test-us-east-2"
    repository = "https://helm.linkerd.io/edge"
    create_namespace = true
    values_files = [
      
    ]
    values  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    layer_name = "test-us-east-2"
    cleanup_on_fail = true
    chart_version = "2.11.5"
    timeout = 23
    wait_for_jobs = true
  }
