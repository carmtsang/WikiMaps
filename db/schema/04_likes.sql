-- Drop and recreate Widgets table (Example)
DROP TABLE IF EXISTS likes CASCADE;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) on DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) on DELETE CASCADE
);
