DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  gps_coordinates INTEGER,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  owner_id INTEGER REFERENCES users(id) on DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) on DELETE CASCADE
);
