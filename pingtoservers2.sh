#! /bin/sh
ping2=$(curl -s -o /dev/null -w '%{http_code}' http://192.168.0.107:3000/status)
echo conectando con server2
echo "$ping2" > ./ping2.txt