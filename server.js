import express from "express";
import users from "./routes/userRoutes.js";
import errorHandler from "./middlewares/error.js";
import notFound from "./middlewares/notFound.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";

const port = process.env.PORT || "5000";
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(loggerMiddleware)

// Route
app.use("/api/users", users);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
