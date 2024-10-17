const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: 6379
});

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/', async (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits || 0) + 1);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});