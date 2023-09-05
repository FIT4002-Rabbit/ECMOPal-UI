# Use a Node base image
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build/index.js"]