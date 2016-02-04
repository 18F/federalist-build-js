#!/bin/bash

repo="${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}"

if [ "$CIRCLE_BRANCH" == "master" ]; then
  url="http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/${repo}/"
else
  url="https://federalist.18f.gov/preview/${repo}/${CIRCLE_BRANCH}/"
fi

echo "testing site URL: ${url}"

commit_url="${url}/commit.txt"
commit_sha="${CIRCLE_SHA1}"

echo "fetching Federalist commit data..."

while [ `curl ${commit_url}` != "$commit_sha" ]; do
  echo "waiting for Federalist to build..."
  sleep 1
done

# pass the Federalist URL to the test runner
SITE_URL=$url npm run test-ci
