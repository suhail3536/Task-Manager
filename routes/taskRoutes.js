const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

const createTask = (req, res) => {
  res.send("Create Task");
};

const getTasks = (req, res) => {
  res.send("Get Tasks");
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;