
  output = [
    {
      user_arn = {
        value = "${module.sdfs.user_arn}"
      }
    },
    {
      role_arn = {
        value = "${module.iamrole.role_arn}"
      }
    },
    {
      queue_arn = {
        value = "${module.sqs.queue_arn}"
      }
    },
    {
      queue_name = {
        value = "${module.sqs.queue_name}"
      }
    },
    {
      queue_id = {
        value = "${module.sqs.queue_id}"
      }
    },
    {
      kms_arn = {
        value = "${module.sqs.kms_arn}"
      }
    },
    {
      bucket_arn = {
        value = "${module.s3.bucket_arn}"
      }
    },
    {
      bucket_id = {
        value = "${module.s3.bucket_id}"
      }
    },
    {
      cloudfront_read_path = {
        value = "${module.s3.cloudfront_read_path}"
      }
    },
    {
      k8s_endpoint = {
        value = "${module.k8scluster.k8s_endpoint}"
      }
    },
    {
      k8s_ca_data = {
        value = "${module.k8scluster.k8s_ca_data}"
      }
    },
    {
      k8s_cluster_name = {
        value = "${module.k8scluster.k8s_cluster_name}"
      }
    },
    {
      k8s_openid_provider_url = {
        value = "${module.k8scluster.k8s_openid_provider_url}"
      }
    },
    {
      k8s_openid_provider_arn = {
        value = "${module.k8scluster.k8s_openid_provider_arn}"
      }
    },
    {
      k8s_node_group_security_id = {
        value = "${module.k8scluster.k8s_node_group_security_id}"
      }
    },
    {
      k8s_version = {
        value = "${module.k8scluster.k8s_version}"
      }
    },
    {
      vpc_id = {
        value = "${module.base.vpc_id}"
      }
    },
    {
      kms_account_key_arn = {
        value = "${module.base.kms_account_key_arn}"
      }
    },
    {
      private_subnet_ids = {
        value = "${module.base.private_subnet_ids}"
      }
    }
  ]
