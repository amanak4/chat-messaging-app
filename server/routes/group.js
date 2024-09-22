const { createGroup, getGroupMessages, addGroupMessage, getAllGroups } = require("../controllers/groupController");
const router = require("express").Router();

router.post("/create", createGroup);
router.post("/messages", getGroupMessages);
router.post("/addmessage", addGroupMessage);
router.get("/allgroups/:id", getAllGroups);

module.exports = router;
