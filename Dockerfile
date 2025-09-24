# Build stage
FROM node:18.19.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:18.19.0-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm ci --only=production

# Copy server and built assets
COPY --from=builder /app/dist ./dist
COPY server.js ./
COPY sitemap.xml robots.txt ./
COPY assets ./assets
COPY favicon.png ./
COPY logo.png ./
COPY logo-header.png ./

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

EXPOSE 3000
CMD ["node", "server.js"]
