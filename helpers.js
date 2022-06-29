const getUserById = (id, users) => {
  for (let user in users) {
    if (id === users[user])
    return user;
  }
};

module.exports = {
  getUserById
}
