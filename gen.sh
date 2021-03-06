#!/bin/bash

rm -f corrections.csv | true

for i in $(cat corrections.txt);
do
	match=$(echo $i | cut -f1 -d",")
	upperMatch="$(tr '[:lower:]' '[:upper:]' <<< ${match:0:1})${match:1}"
	correction=$(echo $i | cut -f2 -d",")
	upperCorrection="$(tr '[:lower:]' '[:upper:]' <<< ${correction:0:1})${correction:1}"
	
	echo "$match-,$correction-" >> corrections.csv
	echo "$match:,$correction:" >> corrections.csv
	echo "$match;,$correction;" >> corrections.csv
	echo "\"$match,\",\"$correction,\"" >> corrections.csv
	echo "$match.,$correction." >> corrections.csv
	echo "$match ,$correction " >> corrections.csv
	echo "$upperMatch ,$upperCorrection " >> corrections.csv
	
done;