# Use a Node base image
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY --from=builder /app /app
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Install Node.js in the nginx image
RUN apk add --no-cache nodejs

EXPOSE 3000
CMD ["node", "app/build/index.js", "&&", "nginx", "-g", "daemon off;"]