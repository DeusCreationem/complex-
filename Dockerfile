# frontend/Dockerfile

# 1. Используем лёгкий образ Node для сборки
FROM node:22.12-alpine AS build

WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Собираем фронтенд (на выходе папка dist)
RUN npm run build

# Примечание: этот Dockerfile собирает только статику в /app/dist.
# Мы будем использовать docker run, чтобы поместить dist в хост ./frontend/dist,
# а nginx (из docker-compose) будет отдавать ./frontend/dist.