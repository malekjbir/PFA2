# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the application code to the container
COPY . .

# Build the Vue.js application
RUN yarn run build

# Expose the container port 
EXPOSE 8080

# Define the command to start the application
CMD ["yarn", "run", "dev"]
