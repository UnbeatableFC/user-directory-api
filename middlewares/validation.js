export default function validationMiddleware(req, res, next) {
  const { name, email, role } = req.body;

  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    const error = new Error("Please add your name");
    error.status = 400;
    return next(error);
  }
  if (!emailRegex.test(email)) {
    const error = new Error("Please input your correct email");
    error.status = 400;
    return next(error);
  }
  if (!role) {
    const error = new Error("Please input your role");
    error.status = 400;
    return next(error);
  }

  next();
}
