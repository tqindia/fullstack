
  module "linkerd"  {
    cleanup_on_fail = true
    env_name = "test-us-east-2"
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/linkerd"
    version = "0.0.1"
    create_namespace = true
    max_history = 16
    repository = "https://helm.linkerd.io/edge"
    atomic = true
    chart_version = "2.11.5"
    values  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    timeout = 23
    dependency_update = 
    wait = true
    wait_for_jobs = true
    values_files = [
      
    ]
  }
