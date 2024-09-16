# ROOT Dockerfile

# base image with all dependencies
FROM node:20.17.0-slim AS base

# sets working dir
WORKDIR /main-app

# Copy the package.json file
COPY package.json ./

# Install dependencies
RUN npm install

# .next production build stage
FROM base AS builder

# sets working dir
WORKDIR /main-app

# copies app code
COPY . .

# copies node modules
COPY --from=base /main-app/node_modules ./node_modules

# env variables for module federation and production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production

# build script
RUN npm run docker-build

# production dependencies only
FROM builder AS prod-base

# sets working dir
WORKDIR /main-app

# copies package.json
COPY package.json ./

# env variables for module federation and production build
ENV NEXT_PRIVATE_LOCAL_WEBPACK=true NODE_ENV=production

# installs prod deps only
RUN npm install --omit=dev

# removes reduntant next files
RUN rm -rf /.next/standalone

# final image
FROM prod-base

# sets working dir
WORKDIR /main-app

# copies necessary files to launch next server
COPY --from=builder /main-app/.next ./.next
COPY --from=builder /main-app/public ./public
COPY --from=builder /main-app/next.config.js ./

# copies node modules
COPY --from=prod-base /main-app/node_modules ./node_modules

# sets non priviledged user
USER node

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node_modules/.bin/next", "start", "-p", "3000"]