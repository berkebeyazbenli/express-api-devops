import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prometheus metrics endpoint
app.get('/metrics', (req, res) => {
  const metrics = `
# HELP http_requests_total Total number of HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",endpoint="/"} ${Math.floor(Math.random() * 100)}
http_requests_total{method="GET",endpoint="/hello"} ${Math.floor(Math.random() * 50)}

# HELP http_request_duration_seconds HTTP request duration in seconds
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds{method="GET",endpoint="/"} ${(Math.random() * 0.1).toFixed(3)}
http_request_duration_seconds{method="GET",endpoint="/hello"} ${(Math.random() * 0.05).toFixed(3)}

# HELP nodejs_heap_size_total Process heap size from Node.js in bytes
# TYPE nodejs_heap_size_total gauge
nodejs_heap_size_total ${process.memoryUsage().heapUsed}

# HELP nodejs_heap_size_used Process heap size used from Node.js in bytes
# TYPE nodejs_heap_size_used gauge
nodejs_heap_size_used ${process.memoryUsage().heapUsed}
`;
  res.set('Content-Type', 'text/plain');
  res.send(metrics);
});

app.get('/', (req, res) => {
  res.json({ message: 'Merhaba, Express API çalışıyor!' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
}); 