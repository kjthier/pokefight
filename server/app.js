import express from 'express';
import routes from './routes/pokemon.js';  
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use('/pokemon', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
