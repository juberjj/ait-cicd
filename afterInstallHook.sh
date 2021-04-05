#!/bin/bash

####################################
# SET MAIN FUNCTIONS
####################################

### Common
#######################
common() {
  echo "------ Common Scripts ------"
	# Copy .env file
	aws s3 cp s3://ait-deployment-dev/node-app/.env /usr/share/nodeapp/.env
  
	# Run NPM.
	npm i --prefix /usr/share/nodeapp
}

### Node Run Script
#######################
node_script() {

  echo "------ Node Scripts ------"

	# Run NPM
 cd /usr/share/nodeapp
 npm run start
}


####################################
# MAIN SCRIPT
####################################
# Sync app directory

#aws s3 cp s3://node-artifacts/app.zip /tmp/app/app.zip

#unzip -o /tmp/app/app.zip -d /tmp/app/
rsync -av --delete /tmp/nodeapp/ /usr/share/nodeapp/

common

node_script

# Remove temporary deployment.
rm -r /tmp/nodeapp
#rm /usr/share/nodeapp/app.zip