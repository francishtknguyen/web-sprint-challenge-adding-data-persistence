const tasks = [{}];
exports.seed = function (knex) {
  return knex("table_name").insert(tasks);
};
