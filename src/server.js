import express from 'express'
import 'dotenv/config'
import models, {sequelize} from './repository/db';
import { routes } from './routes'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
})

app.use("/informacoesPessoais", routes.informacoesPessoais)
app.use("/curriculo", routes.curriculo)

const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC;

sequelize.sync({force: eraseDatabaseOnSync})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`App Curriculo listen on port ${port}`);
})
