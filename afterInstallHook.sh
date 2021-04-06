#!/bin/bash
#set -e

#whoami

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  
#source /root/.bashrc

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