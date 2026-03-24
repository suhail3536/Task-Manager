const Task = require("../models/Task");

// Create
exports.createTask = async (req, res) => {
  const task = await Task.create({
    User: req.Userser.id,
    title: req.body.title,
  });
  res.json(task);
};

// Get
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// Update
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

// Delete
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};