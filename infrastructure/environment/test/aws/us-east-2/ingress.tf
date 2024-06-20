
  module "ingress"  {
    values_files = [
      
    ]
    values  {
      
    }
    wait = true
    repository = "https://kubernetes.github.io/ingress-nginx"
    chart_version = "4.10.1"
    dependency_update = 
    wait_for_jobs = true
    max_history = 16
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/ingress"
    version = "0.0.1"
    cleanup_on_fail = true
    create_namespace = true
    atomic = true
    timeout = 23
    env_name = "test-us-east-2"
  }
