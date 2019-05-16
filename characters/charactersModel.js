const db = require("../database/dbConfig.js");

module.exports = {
  getAll,
  getById,
  add,
  remove
};

function getAll() {
  return db("characters");
}

function getById(id) {
  return db("characters")
    .where({ id })
    .first();
}

async function add(character) {
  const ids = await db("characters").insert(character, "id");
  return db("characters")
    .where({ id: ids[0] })
    .first();

  // or
  // const [id] = await db("characters").insert(character, 'id');
  // return db("characters").where({ id }).first();
}

function remove(id) {
  return db("characters")
    .where({ id: id })
    .del();
}
