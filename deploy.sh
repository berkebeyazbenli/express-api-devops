#!/bin/bash

echo "🚀 Express API Kubernetes Deployment başlatılıyor..."

# Namespace oluştur
echo "📦 Namespace oluşturuluyor..."
kubectl apply -f k8s/namespace.yaml

# Docker imajını build et
echo "🐳 Docker imajı build ediliyor..."
docker build -t myapp:latest .

# Deployment'ı uygula
echo "⚙️  Deployment uygulanıyor..."
kubectl apply -f k8s/deployment.yaml

# Service'i uygula
echo "🌐 Service uygulanıyor..."
kubectl apply -f k8s/service.yaml

# Durumu kontrol et
echo "📊 Deployment durumu kontrol ediliyor..."
kubectl get pods -n express-api-namespace
kubectl get services -n express-api-namespace

echo "✅ Deployment tamamlandı!"
echo "🌍 Uygulamaya erişmek için: kubectl port-forward service/express-api-service 8080:80 -n express-api-namespace" 