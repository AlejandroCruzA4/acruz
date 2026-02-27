const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '2mb' }));

const ROOT = path.resolve(__dirname);

app.use('/', express.static(ROOT, { extensions: ['html'] }));

function safePath(relPath) {
  const target = path.normalize(path.join(ROOT, relPath));
  if (!target.startsWith(ROOT)) throw new Error('Invalid path');
  return target;
}

app.get('/mcp/files', async (req, res) => {
  try {
    const entries = await fs.readdir(ROOT, { withFileTypes: true });
    const files = entries
      .filter(e => e.isFile())
      .map(e => e.name)
      .filter(n => /\.(html|js|css|md)$/.test(n));
    res.json({ files });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.get('/mcp/file', async (req, res) => {
  try {
    const rel = req.query.path;
    if (!rel) return res.status(400).json({ error: 'path query required' });
    const filePath = safePath(rel);
    const content = await fs.readFile(filePath, 'utf8');
    res.json({ path: rel, content });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.post('/mcp/file', async (req, res) => {
  try {
    const { path: rel, content } = req.body;
    if (!rel || typeof content !== 'string') return res.status(400).json({ error: 'path and content required' });
    const filePath = safePath(rel);
    await fs.writeFile(filePath, content, 'utf8');
    res.json({ ok: true, path: rel });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Portfolio MCP server running at http://localhost:${PORT}`));
