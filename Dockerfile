# build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-only

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

# OpenShift uses root group instead of root user
USER 1001

CMD ["nginx", "-g", "daemon off;"]