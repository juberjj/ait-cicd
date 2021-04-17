curl -s -u admin:jnunes http://3.250.102.89:9000/api/qualitygates/project_status?projectKey=juberjj_ait-cicd

if [ $(jq -r '.projectStatus.status' result.json) = ERROR ] ; then $CODEBUILD_BUILD_SUCCEEDING -eq 0 ;fi