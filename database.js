import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const getNotes = async () => {
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
};

const getNote = async (id) => {
  const [row] = await pool.query(
    `
    SELECT *
    FROM notes
    WHERE id = ?
    `,
    [id]
  );
  return row;
};

const notes = await getNotes();

const note = await getNote(1);
console.log(note);
