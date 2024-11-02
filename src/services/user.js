const { User } = require("../models/user");

const createUser = async (user) => {
  const { firstName, lastName, email } = user;

  const user = new User({ firstName, lastName, email });
  await user.save();
};
