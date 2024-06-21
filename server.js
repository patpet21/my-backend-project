const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const DEFAULT_PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware per autenticare tramite token JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Endpoint per il login (simulato con MetaMask)
app.post('/login', (req, res) => {
  const { address } = req.body;
  if (!address) return res.sendStatus(400);

  // Genera un token JWT
  const token = jwt.sign({ address }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Endpoint protetto per ottenere i corsi
app.get('/benefits', authenticateToken, (req, res) => {
  const benefits = [
    { id: 1, name: 'MetaCubeSpace Origin' },
    { id: 2, name: 'Mining Bitcoin Gratuito' },
    { id: 3, name: 'ULTRON - LOTTODAY - FLIPME - La SUPER Blockchain!!' },
    { id: 4, name: 'SAFIR/ZENIQ - MultiChain Ecosystem' },
    { id: 5, name: 'Crypto For Beginners' },
    { id: 6, name: 'MetaCubeTrade - TRADING -' },
    { id: 7, name: 'Beginners Ita' },
  ];
  res.json(benefits);
});

// Endpoint per la root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Funzione per trovare una porta disponibile
const findAvailablePort = (port, callback) => {
  const server = app.listen(port, () => {
    server.close(() => {
      callback(port);
    });
  });
  server.on('error', () => {
    findAvailablePort(port + 1, callback);
  });
};

findAvailablePort(DEFAULT_PORT, (port) => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});


