import express from "express"

const router = express.Router()

import userRoutes from "./routers/users.route.js"
import postRoutes from "./routers/posts.route.js"

router.use("/api/users", userRoutes)
router.use("/api/posts", postRoutes)

export default router
