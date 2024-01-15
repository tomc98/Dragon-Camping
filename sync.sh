#!/bin/bash

# Exit if any command fails
set -e

# Check if aws is installed
if ! command -v aws &> /dev/null
then
    echo "aws could not be found"
    exit
fi

# Desc: Syncs the current directory to the S3 bucket
aws s3api put-public-access-block --bucket dragon-legacy --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
aws s3 sync . s3://dragon-legacy/