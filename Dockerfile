# Temel imaj olarak Node.js kullan
FROM node:20-alpine

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulama 3000 portunda çalışacak
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"] 