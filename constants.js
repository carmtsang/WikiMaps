//define login variables for testing purposes
const users = {
  1: {
    id: 1,
    name: 'Carmen Tsang',
    email: "carmen@example.com",
    password: "password"
  },
 2: {
    id: 2,
    name: 'Roopsy Daisy',
    email: "bunny@example.com",
    password: "password"
  },
  3: {
    id: 3,
    name: 'Carlo Burrito',
    email: "carlo@example.com",
    password: "password"
  }
}

const maps = {
  "Movie Spots": {
    id: 1,
    name: "Movie Spots",
    description: "Did you know that these movies were filmed here?",
    owner_id: 1,
    like_id: 3
  },
  "Best Coffee Around Town": {
    id: 2,
    name: "Best Coffee Around Town",
    description: "Nice coffee, and a good atmosphere",
    owner_id: 1,
    like_id: 3
  },
  "Local Gems": {
    id: 3,
    name: "Local Gems",
    description: "Little hidden gems around, not your normal tourst attraction",
    owner_id: 2,
    like_id: 1
  },
  "Instagram Worthy Restaurants": {
    id: 4,
    name: "Instagram Worthy Restaurants",
    description: "Go there for the gram",
    owner_id: 1,
    like_id: 2
  },


}

module.exports = users;
