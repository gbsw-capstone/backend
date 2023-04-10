import app from './app.js';
import { DEFAULT_PORT } from './config.js'

const PORT = DEFAULT_PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
})