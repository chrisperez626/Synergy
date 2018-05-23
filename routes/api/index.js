const router = require("express").Router();
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const usertaskRoutes = require("./usertasks");
const userprojectRoutes = require("./userprojects");
const taskCommentsRoutes = require('./taskComments');

router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/usertasks",usertaskRoutes);
router.use("/userprojects", userprojectRoutes);
router.use('/taskComments', taskCommentsRoutes)

module.exports = router;