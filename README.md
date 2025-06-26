# Express API Uygulaması

Bu basit bir Express.js API uygulamasıdır.

## Kurulum

```bash
npm install
npm start
```

## Endpoints

- `GET /` - Ana sayfa
- `GET /hello` - Hello world mesajı

## Docker

```bash
docker build -t myapp .
docker run -p 3000:3000 myapp
``` 