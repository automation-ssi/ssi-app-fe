# Step 1: Use Node.js base image for building the app
FROM node:18-alpine AS build-stage

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Vue.js app for production
RUN npm run build

# Step 7: Use Nginx to serve the built files
FROM nginx:stable-alpine AS production-stage

# Step 8: Copy the built files to Nginx's default public directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
