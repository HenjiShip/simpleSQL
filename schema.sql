CREATE DATABASE notes_app;

USE notes_app;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO
    notes (title, contents)
VALUES
    ("My Note 1", "I hate notes"),
    ("My Note 2", "I actually love good notes");