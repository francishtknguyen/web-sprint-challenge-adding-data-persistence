const db = require("../../data/dbConfig");

module.exports = { get, create };

function get() {
  return db("projects");
}

async function create(post) {
  const [project_id] = await db("projects").insert(post);
  return db("projects").where({ project_id });
}
