
  provider "helm" "kubernetes"  {
    cluster_ca_certificate = "$(base64decode(module.k8scluster.k8s_ca_data))"
    token = "${data.aws_eks_cluster_auth.k8s.token}"
    host = "https://${data.k8scluster.k8s.endpoint}"
  }
  provider "aws"  {
    region = "us-east-2"
    allowed_account_ids = [
      []
    ]
  }
