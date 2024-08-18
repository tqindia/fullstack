
terraform {
    required_version = ">= 1.3.0"
  
    backend "s3" {
      bucket         = "production-us-east-2-tfstate"
      key            = "api-tfstate"
      region         = "us-east-2"
      dynamodb_table = "production-us-east-2-api-tfstate"
      encrypt        = true
    }
  
    required_providers {
      aws = {
        source  = "hashicorp/aws"
        version = "5.62.0"
      }
  
      helm = {
        source  = "hashicorp/helm"
        version = "2.14.1"
      }
    }
  }