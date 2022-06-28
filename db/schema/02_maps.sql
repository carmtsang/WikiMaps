DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  name VARCHAR(255),
  comments TEXT,
  owner_id INTEGER REFERENCES users(id) on DELETE CASCADE,
  contributor_id INTEGER REFERENCES users(id) on DELETE CASCADE,
  like_id
);
