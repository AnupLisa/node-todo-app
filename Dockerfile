# Use a lightweight Node.js base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package manifest and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . ./

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
