#!/bin/bash
sudo yum install nginx
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 9.3.0
npm install
npm i -g pm2