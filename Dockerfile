### STAGE 1: Build ###
FROM node:alpine as build
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json /app/package.json
RUN npm config set unsafe-perm true
RUN npm i
RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.14-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /data/conf/nginx.conf
EXPOSE 80
CMD ["nginx", "-c", "/data/conf/nginx.conf", "-g", "daemon off;"]