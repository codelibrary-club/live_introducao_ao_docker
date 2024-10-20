# Use a base image with Node.js
FROM node:16-alpine

# Create a directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]