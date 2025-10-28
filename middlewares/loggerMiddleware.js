import colors from "colors";

const loggerMiddleware = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "white";
  req.timestamp = new Date().toISOString();

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${
      req.originalUrl
    } [${req.timestamp}]`[color]
  );
  next();
};

export default loggerMiddleware;
