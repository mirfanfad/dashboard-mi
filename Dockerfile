# Use an official lightweight Alpine Linux as a parent image
FROM node:17-alpine

# Set working directory
WORKDIR /app

# Install Node.js and npm
RUN apk add --update nodejs npm

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app files to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]