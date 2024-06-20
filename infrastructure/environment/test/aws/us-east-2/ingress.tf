
  module "ingress"  {
    chart_version = "4.10.1"
    dependency_update = 
    create_namespace = true
    values_files = [
      
    ]
    repository = "https://kubernetes.github.io/ingress-nginx"
    cleanup_on_fail = true
    values  {
      
    }
    timeout = 23
    wait = true
    wait_for_jobs = true
    max_history = 16
    env_name = "test-us-east-2"
    atomic = true
    source = "tqindia/cops/cloud/module/ingress"
    version = "0.0.1"
    layer_name = "test-us-east-2"
  }
