#!/bin/bash
source /home/ec2-user/.bash_profile
source /home/ec2-user/.bashrc
cd /home/ec2-user/node-app
sudo service nginx restart
npm run stop
npm run start