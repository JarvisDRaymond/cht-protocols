#!/bin/bash
a=1
y=1
for i in *.jpg; do
  new=$(printf "%0d.jpg" "$a")
  mv -i -- "$i" "$new"
  let a=a+1;
done;
for x in *.txt; do
  new=$(printf "%0d.txt" "$y")
  mv -i -- "$x" "$new"
  let y=y+1
done;
