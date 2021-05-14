const tasks = [
  {
    task_notes: "task1 notes",
    task_description: "task1 description",
    project_id: 1,
  },
  {
    task_notes: "task2 notes",
    task_description: "task2 description",
    project_id: 1,
  },
  {
    task_notes: "task3 notes",
    task_description: "task3 description",
    project_id: 1,
  },
  {
    task_notes: "task4 notes",
    task_description: "task4 description",
    project_id: 2,
  },
  {
    task_notes: "task5 notes",
    task_description: "task5 description",
    project_id: 3,
  },
];
exports.seed = function (knex) {
  return knex("tasks").insert(tasks);
};
