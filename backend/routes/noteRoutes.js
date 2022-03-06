const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controllers/noteControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;

// const express = require("express");
// const {
//   getNotes,
//   CreateNote,
//   getNoteById,
//   UpdateNote,
//   DeleteNote,
// } = require("../controllers/noteControllers");
// const { protect } = require("../middlewares/authMiddleware");
// const router = express.Router();

// router.route("/").get(protect, getNotes);
// router.route("/create").post(protect, CreateNote);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .put(protect, UpdateNote)
//   .delete(protect, DeleteNote);

// module.exports = router;

// const express = require("express");
// const { getNotes, CreateNote } = require("../controllers/noteControllers");
// const { protect } = require("../middlewares/authMiddleware");

// const router = express.Router();

// router.route("/").get(protect, getNotes);
// router.route("/create").post(protect, CreateNote);

// module.exports = router;
