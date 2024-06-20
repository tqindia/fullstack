
  module "airflow"  {
    max_history = 16
    env_name = "test-us-east-2"
    create_namespace = true
    timeout = 23
    wait = true
    source = "tqindia/cops/cloud/module/airflow"
    atomic = true
    cleanup_on_fail = true
    chart_version = "0.33"
    values_files = [
      
    ]
    values  {
      
    }
    repository = "https://airflow.apache.org"
    dependency_update = 
    version = "0.0.1"
    wait_for_jobs = true
    layer_name = "test-us-east-2"
  }
