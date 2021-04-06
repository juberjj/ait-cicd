#!/bin/bash
set -e
source ~/.bashrc
  rsync -av --delete /tmp/nodeapp/ /usr/share/nodeapp/
	# Copy .env file
	aws s3 cp s3://ait-deployment-dev/node-app/.env /usr/share/nodeapp/.env

  echo "------ Node Scripts ------"

	# Run NPM
 cd /usr/share/nodeapp/
	# Run NPM.
 npm i 
 npm run start


# Remove temporary deployment.
#rm -r /tmp/nodeapp
#rm /usr/share/nodeapp/app.zip