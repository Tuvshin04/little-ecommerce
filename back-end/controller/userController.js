import { User } from "../model/User.js";

const getAllUser = async (request, response) => {
  const result = await User.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { getAllUser };
