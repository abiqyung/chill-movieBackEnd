const dbPool = require("../config/database");
const { mkcol } = require("../routes/users");

const getAllusers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (username, email, password ) 
                    VALUES ("${body.username}", "${body.email}", "${body.password}")`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (body, user_id) => {
  const SQLQuery = `UPDATE users 
                    SET username = "${body.username}", email = "${body.email}", password = "${body.password}" 
                    WHERE user_id = ${user_id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (user_id) => {
  const SQLQuery = `DELETE FROM users WHERE user_id = ${user_id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = { getAllusers, createNewUser, updateUser, deleteUser };
