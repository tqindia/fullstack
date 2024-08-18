module "base" {
  # Private IPv4 CIDR Blocks
  private_ipv4_cidr_blocks = ["10.0.128.0/21", "10.0.136.0/21", "10.0.144.0/21"]

  # Public IPv4 CIDR Blocks
  public_ipv4_cidr_blocks = ["10.0.0.0/21", "10.0.8.0/21", "10.0.16.0/21"]

  # Total IPv4 CIDR Block
  total_ipv4_cidr_block = "10.0.0.0/16"

  # VPC Log Retention in days
  vpc_log_retention = 90

  # Module source
  source = "git::https://github.com/thesaas-company/terraform-cloud-cops.git//modules/aws_base?ref=main"

  # Environment name
  env_name = "production-us-east-1"

  # Layer name
  layer_name = "production-us-east-1"

  # Module name
  module_name = "base"
}