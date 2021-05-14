const projects_resources = [{}];
exports.seed = function (knex) {
  return knex("table_name").insert(projects_resources);
};
