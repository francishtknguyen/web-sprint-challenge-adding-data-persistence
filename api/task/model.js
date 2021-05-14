const db = require("../../data/dbConfig");

module.exports = { get, create };

function get() {
  return db("tasks");
}

async function create(post) {
  const [task_id] = await db("tasks").insert(post);
  return db("tasks").where({ task_id });
}
