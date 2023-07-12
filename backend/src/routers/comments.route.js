import express from "express"

const router = express.Router()

import commentControllers from "../controllers/commentControllers.js"

router.get("/", commentControllers.browse)
router.get("/:id", commentControllers.read)

export default router
