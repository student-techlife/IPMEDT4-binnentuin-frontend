# Frontend - react
FROM node:alpine as build-stage

# Environment vars
# ENV REACT_APP_URL_VPS=http://...:8000

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app/
RUN npm run build

# Nginx proxy server
FROM nginx:1.15-alpine

# Kopieer react build en conf files naar web server
COPY --from=build-stage /app/build/ /var/www/public
COPY nginx/sites-available/ /etc/nginx/sites-available/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/ /etc/nginx/conf.d/

# Expose poort 8000 en 80
EXPOSE 8000
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]