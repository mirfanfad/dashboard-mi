# Use an official lightweight Alpine Linux as a parent image
FROM node:17-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 6969

# Set environment variables for the subdomain and the host port
ENV VITE_PUBLIC_PATH=/dashboard-mi/
ENV VITE_PORT=6969

# Start the application
CMD ["npm", "run", "dev"]