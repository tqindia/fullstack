
  module "airflow"  {
    cleanup_on_fail = true
    chart_version = "0.33"
    timeout = 23
    env_name = "test-us-east-2"
    atomic = true
    create_namespace = true
    wait_for_jobs = true
    max_history = 16
    layer_name = "test-us-east-2"
    source = "tqindia/cops/cloud/module/airflow"
    version = "0.0.1"
    repository = "https://airflow.apache.org"
    values_files = [
      
    ]
    values  {
      
    }
    dependency_update = 
    wait = true
  }
