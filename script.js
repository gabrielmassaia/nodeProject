import 'dotenv/config';
import pkg from 'pg';

const { Client } = pkg;

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

const client = new Client({
  host: PGHOST,
  port: 5432,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => {
    console.log('Conexão bem-sucedida');
    return client.end();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
  });

