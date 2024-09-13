# Main/shell app Dockerfile

# Official Node.js runtime as a parent image
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /main-app

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
WORKDIR /main-app

# Copy the package.json file
COPY package.json ./

# Environment variables necessary for module federation and production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production

# Install dependencies
RUN npm install --omit=dev

# Copy from builder of the necessary files only
COPY --from=builder /main-app/.next ./.next

# Removes next standalone build in order to free some space since we wont need it
RUN rm -rf /.next/standalone

# Copy the public folder (it is needed to serve static assets)
COPY --from=builder /main-app/public ./public

# Copy the public folder (it is needed to serve static assets)
COPY --from=builder /main-app/next.config.js ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "docker-start"]