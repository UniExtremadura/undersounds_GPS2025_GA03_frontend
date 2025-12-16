FROM node:20-slim
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci

# Copiar el código fuente
COPY src ./src
COPY public ./public
COPY tsconfig*.json ./
COPY angular.json ./

# Exponer puerto
EXPOSE 4200

# Comando de inicio - usar ng serve directamente
CMD ["npx", "ng", "serve", "--port", "4200", "--host", "0.0.0.0", "--disable-host-check"]
