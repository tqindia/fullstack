
  module "airflow"  {
    cleanup_on_fail = true
    chart_version = "0.33"
    layer_name = "test-us-east-2"
    atomic = true
    wait = true
    wait_for_jobs = true
    env_name = "test-us-east-2"
    version = "0.0.1"
    repository = "https://airflow.apache.org"
    values_files = [
      
    ]
    dependency_update = 
    max_history = 16
    create_namespace = true
    values  {
      
    }
    timeout = 23
    source = "tqindia/cops/cloud/module/airflow"
  }
