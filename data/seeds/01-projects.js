const projects = [{}];
exports.seed = function (knex) {
  return knex("table_name").insert(projects);
};
