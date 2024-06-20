
  module "iamrole"  {
    allowed_k8s_services = [
      {
        namespace = "*"
        service_name = "*"
      }
    ]
    extra_iam_policies = [
      "fasd"
    ]
    version = "0.0.1"
    layer_name = "test-us-east-2"
    kubernetes_trusts = [
      {
        open_id_arn = "${module.k8scluster.k8s_openid_provider_arn}"
        service_name = "*"
        namespace = "*"
        open_id_url = "${module.k8scluster.k8s_openid_provider_url}"
      }
    ]
    source = "tqindia/cops/cloud/module/aws_iam_role"
    allowed_iams = [
      "asfd"
    ]
    links = [
      "sqs",
      {
        s3 = [
          "write"
        ]
      }
    ]
    env_name = "test-us-east-2"
  }
