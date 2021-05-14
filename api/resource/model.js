const db = require("../../data/dbConfig");

module.exports = { get, create };

function get() {
  return db("resources");
}

async function create(post) {
  const [resource_id] = await db("resources").insert(post);
  return db("resources").where({ resource_id });
}
