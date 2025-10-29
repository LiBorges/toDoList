import mysql from 'mysql2/promise';
const configs = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tarefas'
}
const db = await mysql.createConnection(configs);

if (db) console.log('MySQL conectado!');

export default db;