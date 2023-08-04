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

export const getNotes = async () => {
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
};

export const getNote = async (id) => {
  const query = `
    SELECT *
    FROM notes
    WHERE id = ?
    `;
  const [row] = await pool.query(query, [id]);
  return row;
};

export const createNote = async (title, content) => {
  const query = `
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
  `;
  const result = await pool.query(query, [title, content]);
  const id = result[0].insertId;
  return getNote(id);
};
// parameters in pool.query must be in the same order as INSERT INTO

// const notes = await getNotes();
// console.log(notes);

// const note = await getNote(1);
// console.log(note);

// const createdNoteId = await createNote("test", "test");
// console.log(createdNoteId);
