-- Stretch goal to add comments to a map

DROP TABLE IF EXISTS map_comments CASCADE;
CREATE TABLE map_comments (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id) on DELETE CASCADE,
  commenter_id INTEGER REFERENCES user(id),
  comment TEXT,
);
