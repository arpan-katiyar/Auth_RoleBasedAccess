// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const authorize = require("../../../middlewares/roleMiddleware");
const taskController = require("../../../controllers/taskController");

// Anyone logged in can create task (user or admin)
router.post("/tasks", auth, authorize(["user", "admin"]), taskController.createTask);

// Admin gets all tasks, user gets only their own
router.get("/tasks", auth, authorize(["user", "admin"]), taskController.getTasks);

// Update task — user can update their task, admin can update any
router.put("/tasks/:id", auth, authorize(["user", "admin"]), taskController.updateTask);

// Delete task — same logic
router.delete("/tasks/:id", auth, authorize(["user", "admin"]), taskController.deleteTask);

module.exports = router;
