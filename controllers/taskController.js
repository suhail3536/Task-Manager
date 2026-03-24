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
exports.createTask = async (req, res) => {
  const task = await Task.create({
    user: req.user.id, // ✅ correct
    title: req.body.title,
  });

  res.json(task);
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