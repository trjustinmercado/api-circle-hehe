#!/bin/bash
source /home/ec2-user/.bash_profile
isExistApp=`pgrep nginx`
if [[ -n  $isExistApp ]]; then
   service nginx stop
fi
isExistApp=`pgrep node`
if [[ -n  $isExistApp ]]; then
    killall node
fi
