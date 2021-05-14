const resources = [{}];
exports.seed = function (knex) {
  return knex("table_name").insert(resources);
};
