FROM --platform=linux/amd64 node:18-alpine AS DEVELOPMENT

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build:backend


FROM --platform=linux/amd64 node:18-alpine AS PRODUCTION

WORKDIR /app

COPY package*.json .
RUN npm install --production

COPY --from=DEVELOPMENT /app/dist .

ENTRYPOINT ["node", "dist/apps/backend/main.js"]
