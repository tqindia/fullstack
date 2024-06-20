
  module "ingress"  {
    atomic = true
    dependency_update = 
    layer_name = "test-us-east-2"
    values_files = [
      
    ]
    timeout = 23
    wait = true
    repository = "https://kubernetes.github.io/ingress-nginx"
    create_namespace = true
    values  {
      
    }
    env_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/ingress"
    version = "0.0.1"
    cleanup_on_fail = true
    chart_version = "4.10.1"
    wait_for_jobs = true
    max_history = 16
  }
