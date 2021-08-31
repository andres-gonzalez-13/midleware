#! /bin/sh
current_date=$(date)

last_debian0_ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.100.12:3000/status)

echo "$last_debian0_ping $current_date" > ./last_debian0_ping.txt