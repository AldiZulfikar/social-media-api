import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-route";
import router from "./routes/user-route";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog/", blogRouter);

mongoose
	.connect("your mongoDb")
	.then(() => app.listen(5000))
	.then(console.log("Connected to database and running in port 5000"))
	.catch((err) => console.log(err));

// innNqVKq5BltNj2D
