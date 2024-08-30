# Provider one Dockerfile

# Official Node.js runtime as a parent image
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /provider-one

# Copy the package.json file
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Environment variables necessary for module federation and production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production

# Build the Next.js app
RUN npm run docker-build


# Production image with only necessary files
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /provider-one

# Copy from builder of the necessary files only
COPY --from=builder /provider-one/.next/standalone ./

# Copy the public folder (it is needed to serve static assets)
COPY --from=builder /provider-one/public ./public

# Optionally copy the next.config.js if needed
# COPY --from=builder /provider-one/next.config.js ./

# Optionally copy any .env files if you are not using Docker environment variables
# COPY --from=builder /provider-one/.env ./

# Expose the port the app runs on
EXPOSE 3001

# Environment variables necessary for module federation and production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production PORT=3001

# Start the application
CMD ["node", "server.js"]