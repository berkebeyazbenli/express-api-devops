# 🚀 Express API - Production Ready DevOps Application

Bu proje, modern DevOps pratikleri kullanılarak geliştirilmiş production-ready bir Express.js API uygulamasıdır. Kubernetes, Docker, GitLab CI/CD, Prometheus ve ELK Stack ile tam bir monitoring ve deployment altyapısı içerir.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Hızlı Başlangıç](#-hızlı-başlangıç)
- [Detaylı Kurulum](#-detaylı-kurulum)
- [Development](#-development)
- [Production Deployment](#-production-deployment)
- [Monitoring](#-monitoring)
- [Troubleshooting](#-troubleshooting)
- [API Endpoints](#-api-endpoints)
- [DevOps Komutları](#-devops-komutları)

## ✨ Özellikler

- 🐳 **Docker Containerization** - Taşınabilir deployment
- ☸️ **Kubernetes Orchestration** - Production-ready deployment
- 🔄 **GitLab CI/CD** - Otomatik build ve deployment
- 📊 **Prometheus + Grafana** - Metrik toplama ve görselleştirme
- 📝 **ELK Stack** - Log yönetimi ve analizi
- ⚡ **Auto-scaling** - Otomatik ölçeklendirme (2-10 pod)
- 🔒 **RBAC** - Rol tabanlı erişim kontrolü
- 🏥 **Health Checks** - Liveness ve readiness probe'ları
- 🌐 **Load Balancing** - Yük dengeleme
- 📈 **Resource Management** - CPU/Memory limitleri

## 🛠️ Teknoloji Stack

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **npm** - Package manager

### **Container & Orchestration**
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **Docker Desktop** - Local development

### **CI/CD**
- **GitLab CI/CD** - Continuous Integration/Deployment
- **Git** - Version control

### **Monitoring & Observability**
- **Prometheus** - Metrics collection
- **Grafana** - Data visualization
- **Elasticsearch** - Log storage
- **Kibana** - Log visualization

### **Infrastructure**
- **Kubernetes RBAC** - Security
- **Health Checks** - Application monitoring
- **Auto-scaling** - Performance optimization

## 🚀 Hızlı Başlangıç

### **Gereksinimler**
```bash
# Sistem gereksinimleri
- macOS 10.15+ / Ubuntu 20.04+ / Windows 10+
- Docker Desktop
- kubectl CLI
- Git
- Node.js 18+
```

### **1. Repository'yi Klonla**
```bash
git clone https://gitlab.com/berkebeyazbenli/myapp.git
cd myapp
```

### **2. Hızlı Deployment**
```bash
# Tüm sistemi tek komutla başlat
./deploy.sh
```

### **3. Uygulamayı Test Et**
```bash
# API'yi test et
curl http://localhost:8081

# Beklenen çıktı:
# {"message":"Merhaba, Express API çalışıyor!"}
```

## 📖 Detaylı Kurulum

### **1. Sistem Hazırlığı**

#### **Docker Desktop Kurulumu**
```bash
# macOS için
brew install --cask docker

# Ubuntu için
sudo apt-get update
sudo apt-get install docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Windows için
# Docker Desktop'ı https://docker.com adresinden indir
```

#### **Kubernetes CLI Kurulumu**
```bash
# macOS için
brew install kubectl

# Ubuntu için
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Windows için
# Chocolatey: choco install kubernetes-cli
```

#### **Node.js Kurulumu**
```bash
# macOS için
brew install node

# Ubuntu için
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows için
# https://nodejs.org adresinden indir
```

### **2. Proje Kurulumu**

#### **Bağımlılıkları Yükle**
```bash
npm install
```

#### **Docker Image Build**
```bash
docker build -t myapp:latest .
```

#### **Kubernetes Deployment**
```bash
# Namespace oluştur
kubectl apply -f k8s/namespace.yaml

# RBAC kurulumu
kubectl apply -f k8s/rbac.yaml

# Application deployment
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Monitoring stack
kubectl apply -f k8s/monitoring.yaml
kubectl apply -f k8s/logging.yaml
```

## 💻 Development

### **Local Development**
```bash
# Uygulamayı local'de çalıştır
npm start

# Development server: http://localhost:3000
```

### **Docker Development**
```bash
# Docker container'ı çalıştır
docker run -p 3000:3000 myapp:latest

# Container'ı test et
curl http://localhost:3000
```

### **Kubernetes Development**
```bash
# Pod'ları kontrol et
kubectl get pods -n express-api-namespace

# Log'ları izle
kubectl logs -f deployment/express-api -n express-api-namespace

# Pod'a bağlan
kubectl exec -it <pod-name> -n express-api-namespace -- /bin/sh
```

## 🚀 Production Deployment

### **1. GitLab CI/CD Pipeline**

#### **Pipeline Aşamaları**
```yaml
stages:
  - build      # Bağımlılıkları yükle
  - test       # Testleri çalıştır
  - security   # Güvenlik taraması
  - deploy     # Kubernetes'e deploy
  - monitoring # Monitoring kurulumu
```

#### **Pipeline Tetikleme**
```bash
# Git'e push yaparak pipeline'ı tetikle
git add .
git commit -m "Update application"
git push origin main
```

### **2. Kubernetes Production Deployment**

#### **Auto-scaling Konfigürasyonu**
```bash
# Horizontal Pod Autoscaler
kubectl autoscale deployment express-api \
  --min=2 --max=10 --cpu-percent=80 \
  -n express-api-namespace
```

#### **Resource Limits**
```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

### **3. Monitoring Kurulumu**

#### **Prometheus Dashboard**
```bash
# Prometheus'a erişim
kubectl port-forward service/prometheus-service 9090:9090 -n express-api-namespace

# Web arayüzü: http://localhost:9090
```

#### **Kibana Dashboard**
```bash
# Kibana'ya erişim
kubectl port-forward service/kibana-service 5601:5601 -n express-api-namespace

# Web arayüzü: http://localhost:5601
```

## 📊 Monitoring

### **Prometheus Query Örnekleri**

#### **Application Metrics**
```promql
# HTTP request sayısı
http_requests_total

# Response time
http_request_duration_seconds

# Memory kullanımı
nodejs_heap_size_used
```

#### **Kubernetes Metrics**
```promql
# Pod CPU kullanımı
container_cpu_usage_seconds_total{pod=~"express-api.*"}

# Pod memory kullanımı
container_memory_usage_bytes{pod=~"express-api.*"}

# Pod sayısı
count(kube_pod_info{pod=~"express-api.*"})
```

### **Grafana Dashboard'ları**

#### **Application Dashboard**
- Request rate
- Response time
- Error rate
- Memory usage
- CPU usage

#### **Infrastructure Dashboard**
- Pod status
- Node metrics
- Network traffic
- Resource utilization

### **ELK Stack Log Analizi**

#### **Log Patterns**
```bash
# Application log'ları
kubectl logs -f deployment/express-api -n express-api-namespace

# Error log'ları
kubectl logs deployment/express-api -n express-api-namespace | grep ERROR

# Performance log'ları
kubectl logs deployment/express-api -n express-api-namespace | grep "response time"
```

## 🔧 Troubleshooting

### **Yaygın Sorunlar ve Çözümleri**

#### **1. Pod'lar Başlamıyor**
```bash
# Pod durumunu kontrol et
kubectl get pods -n express-api-namespace

# Pod detaylarını gör
kubectl describe pod <pod-name> -n express-api-namespace

# Log'ları kontrol et
kubectl logs <pod-name> -n express-api-namespace
```

#### **2. ImagePullBackOff Hatası**
```bash
# Docker image'ın var olduğunu kontrol et
docker images | grep myapp

# ImagePullPolicy'yi kontrol et
kubectl get deployment express-api -n express-api-namespace -o yaml
```

#### **3. Port Forwarding Sorunu**
```bash
# Port kullanımını kontrol et
lsof -i :8081 -i :9090 -i :5601

# Port forwarding işlemlerini durdur
pkill -f "kubectl port-forward"

# Yeniden başlat
kubectl port-forward service/express-api-service 8081:80 -n express-api-namespace
```

#### **4. Metrics API Hatası**
```bash
# Metrics server'ı kontrol et
kubectl get pods -n kube-system | grep metrics-server

# Metrics server'ı yeniden başlat
kubectl rollout restart deployment metrics-server -n kube-system
```

### **Debug Komutları**

#### **Sistem Durumu**
```bash
# Cluster durumu
kubectl get nodes
kubectl get pods --all-namespaces

# Service durumu
kubectl get services --all-namespaces

# Deployment durumu
kubectl get deployments --all-namespaces
```

#### **Resource Kullanımı**
```bash
# Pod resource kullanımı
kubectl top pods -n express-api-namespace

# Node resource kullanımı
kubectl top nodes

# Auto-scaling durumu
kubectl get hpa -n express-api-namespace
```

## 🌐 API Endpoints

### **Base URL**
```
http://localhost:8081 (Port forwarding ile)
http://<service-ip>:80 (Cluster içi)
```

### **Endpoints**

#### **GET /** - Ana Sayfa
```bash
curl http://localhost:8081/
```
**Response:**
```json
{
  "message": "Merhaba, Express API çalışıyor!"
}
```

#### **GET /hello** - Hello World
```bash
curl http://localhost:8081/hello
```
**Response:**
```json
{
  "message": "Hello, world!"
}
```

#### **GET /metrics** - Prometheus Metrics
```bash
curl http://localhost:8081/metrics
```
**Response:**
```
# HELP http_requests_total Total number of HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",endpoint="/"} 42
http_requests_total{method="GET",endpoint="/hello"} 15
```

## 🛠️ DevOps Komutları

### **Deployment Komutları**

#### **Hızlı Deployment**
```bash
# Tüm sistemi başlat
./deploy.sh

# Sadece application
kubectl apply -f k8s/deployment.yaml -f k8s/service.yaml

# Sadece monitoring
kubectl apply -f k8s/monitoring.yaml -f k8s/logging.yaml
```

#### **Scaling Komutları**
```bash
# Manuel scaling
kubectl scale deployment express-api --replicas=5 -n express-api-namespace

# Auto-scaling
kubectl autoscale deployment express-api --min=2 --max=10 --cpu-percent=80 -n express-api-namespace

# Auto-scaling durumunu kontrol et
kubectl get hpa -n express-api-namespace
```

#### **Update Komutları**
```bash
# Rolling update
kubectl rollout restart deployment express-api -n express-api-namespace

# Update durumunu kontrol et
kubectl rollout status deployment express-api -n express-api-namespace

# Rollback
kubectl rollout undo deployment express-api -n express-api-namespace
```

### **Monitoring Komutları**

#### **Log Management**
```bash
# Real-time log izleme
kubectl logs -f deployment/express-api -n express-api-namespace

# Belirli pod'un log'ları
kubectl logs <pod-name> -n express-api-namespace

# Son N satır log
kubectl logs --tail=100 deployment/express-api -n express-api-namespace
```

#### **Resource Monitoring**
```bash
# Pod resource kullanımı
kubectl top pods -n express-api-namespace

# Node resource kullanımı
kubectl top nodes

# Service endpoint'leri
kubectl get endpoints -n express-api-namespace
```

### **Cleanup Komutları**

#### **Sistem Temizliği**
```bash
# Namespace'i sil (tüm pod'ları durdurur)
kubectl delete namespace express-api-namespace

# Sadece deployment'ı sil
kubectl delete deployment express-api -n express-api-namespace

# Port forwarding'i durdur
pkill -f "kubectl port-forward"

# Docker container'larını temizle
docker stop $(docker ps -q)
docker system prune -f
```

## 📚 Öğrenme Kaynakları

### **Kubernetes**
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Kubernetes in Action](https://www.manning.com/books/kubernetes-in-action)
- [CKA Certification](https://www.cncf.io/certification/cka/)

### **Docker**
- [Docker Documentation](https://docs.docker.com/)
- [Docker Deep Dive](https://www.udemy.com/course/docker-deep-dive/)

### **Monitoring**
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [ELK Stack Guide](https://www.elastic.co/guide/index.html)

### **DevOps**
- [Site Reliability Engineering](https://sre.google/)
- [The Phoenix Project](https://itrevolution.com/the-phoenix-project/)
- [DevOps Handbook](https://itrevolution.com/the-devops-handbook/)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Proje Linki:** https://gitlab.com/berkebeyazbenli/myapp
- **Issues:** https://gitlab.com/berkebeyazbenli/myapp/-/issues

---

## 🎯 Sonuç

Bu proje, modern DevOps pratiklerini kullanarak production-ready bir uygulama geliştirmenin tam bir örneğidir. Kubernetes, Docker, monitoring ve CI/CD ile enterprise-level bir altyapı kurmuş olduk.

**Happy Coding! 🚀** 