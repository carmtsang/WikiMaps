DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id),
  map_id INTEGER REFERENCES maps(id),
  longitude FLOAT(32) NOT NULL,
  latitude FLOAT(32) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(255)
);
