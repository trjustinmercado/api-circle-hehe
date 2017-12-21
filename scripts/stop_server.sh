#!/bin/bash
isExistApp=`pgrep nginx`
if [[ -n  $isExistApp ]]; then
   sudo service nginx stop
fi
isExistApp=`pgrep node`
if [[ -n  $isExistApp ]]; then
    sudo killall node
fi