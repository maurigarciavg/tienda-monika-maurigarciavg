# ---- Etapa 1: instalar dependencias ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- Etapa 2: construir la app ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Etapa 3: servidor de producción (imagen final, ligera) ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
