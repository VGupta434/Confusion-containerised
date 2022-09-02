FROM nginx:alpine

Copy ./dist/conFusion /usr/share/nginx/html

EXPOSE 80
