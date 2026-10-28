const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(url.pathname);

  
  if (pathname === '/api/payments/plans' || pathname === '/payments/plans') {
    const plansFile = path.resolve(ROOT, 'api/payments/plans.json');
    if (fs.existsSync(plansFile)) {
      const data = fs.readFileSync(plansFile);
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
      });
      if (req.method === 'HEAD') return res.end();
      return res.end(data);
    }
  }

  if (pathname.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true }));
  }

  
  const relPath = pathname.replace(/^\/+/, '');
  let filePath = path.resolve(ROOT, relPath);

  
  if (!fs.existsSync(filePath) && (pathname.endsWith('.woff2') || pathname.endsWith('.woff') || pathname.endsWith('.ttf'))) {
    const fontName = path.basename(pathname);
    const fontCandidates = [
      path.resolve(ROOT, 'fonts', 'icons', fontName),
      path.resolve(ROOT, 'fonts', 'text', 'poppins', fontName),
      path.resolve(ROOT, 'fonts', 'text', 'inter', fontName),
      path.resolve(ROOT, 'fonts', 'text', 'jetbrains', fontName),
    ];
    for (const cand of fontCandidates) {
      if (fs.existsSync(cand)) {
        filePath = cand;
        break;
      }
    }
  }

  
  if (!fs.existsSync(filePath) && pathname.startsWith('/assets/')) {
    const baseName = path.basename(pathname);
    const candidates = [
      path.resolve(ROOT, 'assets', 'core', baseName),
      path.resolve(ROOT, 'assets', 'css', baseName),
      path.resolve(ROOT, 'assets', 'pages', baseName),
    ];
    for (const cand of candidates) {
      if (fs.existsSync(cand)) {
        filePath = cand;
        break;
      }
    }
  }

  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.resolve(filePath, 'index.html');
  }

  
  if (!fs.existsSync(filePath)) {
    filePath = path.resolve(ROOT, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stat = fs.statSync(filePath);
    
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache'
    });

    if (req.method === 'HEAD') {
      return res.end();
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
      }
      res.end('Server Error');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Timewarp running at http://localhost:${PORT}`);
});