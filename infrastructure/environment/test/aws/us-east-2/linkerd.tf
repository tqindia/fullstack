
  module "linkerd"  {
    env_name = "test-us-east-2"
    dependency_update = 
    source = "tqindia/cops/cloud/module/linkerd"
    version = "0.0.1"
    chart_version = "2.11.5"
    values_files = [
      
    ]
    cleanup_on_fail = true
    timeout = 23
    wait = true
    wait_for_jobs = true
    max_history = 16
    atomic = true
    create_namespace = true
    values  {
      clusterName = "${module.k8scluster.k8s_cluster_name}"
    }
    layer_name = "test-us-east-2"
    repository = "https://helm.linkerd.io/edge"
  }
