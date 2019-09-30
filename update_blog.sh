#!/bin/sh
hugo

mv public/index.html public/blog.html
mv public/index.xml public/blog.xml

cp -r public/* ./
cp -r content/* ./

git add .
git commit -m "Updated blog"
git push origin master
