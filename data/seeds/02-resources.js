const resources = [
  { resource_name: "resource1", resource_description: "resource1 description" },
  { resource_name: "resource2", resource_description: "resource2 description" },
  { resource_name: "resource3", resource_description: "resource3 description" },
  { resource_name: "resource4", resource_description: "resource4 description" },
  { resource_name: "resource5", resource_description: "resource5 description" },
];
exports.seed = function (knex) {
  return knex("resources").insert(resources);
};