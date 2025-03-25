#1 for Angular

# take the image from docker hub and use as builder
FROM node:alpine AS builder 

# i want to place all my code in ang working directory
WORKDIR /ang 

# copy all the code to working directory root
COPY . . 

# execute run commands
RUN npm i && npm run build
 

#2 for Nginx

# take the image of nginx from dockerhub
FROM nginx:alpine

# default working directory for nginx 
WORKDIR /usr/share/nginx/html

# clear the above html folder 
RUN rm -rf ./*

# copy from dist/angular code into current directory (add the angular build content named as builder into html of nginx)
COPY --from=builder /ang/dist/first-app-ngmodule/browser .

# while running, execute the following commands
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]