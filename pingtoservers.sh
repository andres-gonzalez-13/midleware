#! /bin/sh
current_date=$(date)

if ping -c 1 192.168.0.105 &> /dev/null
then
  echo 1
else
  echo 0
fi