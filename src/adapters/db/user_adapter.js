//Adapters connect to the data sources both internal and external
const User = require('../../models/user_model');
const db = {
  query: () => ({id: 1, name: "first_name last_name"}),
};

exports.get_user = async (userId) => {
  const {id, name} = db.query("SELECT * FROM user WHERE id = :id", { id: userId });
  const user = new User({id, name});
  return user;
}