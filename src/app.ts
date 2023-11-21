import express, { Application } from "express"
import { userRoutes } from "./routes/user.routes"

export const app: Application = express()
app.use(express.json())

app.use("/user", userRoutes)