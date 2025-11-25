# Stage 1: Build Stage
FROM node:16.17-alpine AS build

# Install specific npm version
RUN npm install -g npm@8.15.0

# Create app directory and set permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copy package files and install dependencies
COPY package*.json ./
USER node
RUN npm install

# Copy the rest of the application source code
COPY --chown=node:node . .

# Run build script if necessary (uncomment if needed)
# RUN npm run build

# Stage 2: Production Stage
FROM node:16.17-alpine

# Install specific npm version
RUN npm install -g npm@8.15.0

# Set working directory
WORKDIR /home/node/app

# Copy the application build from the previous stage
COPY --from=build /home/node/app .
RUN node -v && npm -v

# Expose the port the app will run on
EXPOSE 8081

# Set the command to start the app
CMD [ "npm", "start" ]
