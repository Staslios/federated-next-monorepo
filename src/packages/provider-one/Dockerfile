# Stage 1: Build the application
# Use an official Node.js runtime as a parent image
FROM node:20.17.0-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variable to run production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production

# Build the Next.js app
RUN npm run docker-build

# Expose the Next.js port
EXPOSE 3001

# Start the Next.js app
CMD ["npm", "run", "docker-start"]