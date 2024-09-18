const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const PORT = process.env.PORT || 3003;

// Serve static files from /dist folder
const staticDir = path.resolve(__dirname, 'dist');
app.use(serve(staticDir));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});