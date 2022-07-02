const addLikes = (userID, likes, db) => {
  const queryString = `INSERT INTO likes (user_id, map_id)
  VALUES ($1, $2)
  RETURNING *;`

  const values = [
    userID,
    likes.mapid,
  ]

  return db.query(queryString, values)
    .then(res => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
}

const deleteLikes = (userID, db) => {
  const queryString = `DELETE FROM likes (user_id, map_id)
  WHERE`

  const values = [
    userID,
    likes.mapid,
  ]

  return db.query(queryString, values)
    .then(res => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
}

module.exports = {
  addLikes,
  deleteLikes
};
