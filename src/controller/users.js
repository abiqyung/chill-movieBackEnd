const UsersModel = require("../models/users");

const getAllusers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllusers();

    res.json({
      message: "Get Users Suksess",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: "Membuat User baru Suksess",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, user_id);
    res.json({
      message: "Update User Suksess",
      data: {
        user_id: user_id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    await UsersModel.deleteUser(user_id);
    res.json({
      message: "Delete User Suksess",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessege: error,
    });
  }
};

module.exports = {
  getAllusers,
  createNewUser,
  updateUser,
  deleteUser,
};
