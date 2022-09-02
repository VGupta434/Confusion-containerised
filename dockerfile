#This docker file is created and maintained by vg52531@gmail.com
FROM nginx:alpine

Copy ./dist/conFusion /usr/share/nginx/html

EXPOSE 80
