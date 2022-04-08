#!/usr/bin/env node
const createApp = require('./app');

const app = createApp();
const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`🌍 Express server listening on port ${port}`);
});
