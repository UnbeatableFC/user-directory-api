import users from "../lib/userData.js";

// Get All Users Controller
export const getAllUsers = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
  console.log(`All Users loaded!`);
};

// Get Single User Controller
export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`User with id of ${id} does not exist`);
    error.status = 404;
    console.error(`User with id of ${id} does not exist`);
    return next(error);
  } else {
    res.status(200).json(user);
    console.log(`User with id of ${id} has been displayed`);
  }
};

// Add new user controller
export const addNewUser = (req, res, next) => {
  const { name, email, role } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role,
  };
  users.push(newUser);
  res.status(201).json(users);
  console.log(`New User has been added`);
};

// Update User controller
export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`User with id of ${id} does not exist`);
    error.status = 404;
    console.error(`User with id of ${id} does not exist`);
    return next(error);
  }

  user.name = req.body.name;
  user.email = req.body.email;
  user.role = req.body.role;

  res.status(200).json(users);
  console.log(`User with id of ${id} has been updated`);
};

// Delete user controller
export const removeUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`User with id of ${id} does not exist`);
    error.status = 404;
    console.error(`User with id of ${id} does not exist`);
    return next(error);
  }

  const remaingingUsers = users.filter((user) => user.id !== id);
  res.status(200).json(remaingingUsers);
  console.log(`User with id of ${id} has been removed`);
};
