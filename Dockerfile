# Build stage
FROM node:18.19.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Install all deps (including dev) for build without lockfile
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:18.19.0-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PORT=80

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

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
  CMD node -e "require('http').get('http://localhost:$PORT/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

EXPOSE 80
CMD ["node", "server.js"]
