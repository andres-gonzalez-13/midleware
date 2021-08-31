#! /bin/sh
ping=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.0.106:3000/status)
echo conectando con server
echo "$ping" > ./ping.txt