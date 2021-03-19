//Business logics
//Input validation
const user_adapter = require('../adapters/db/user_adapter');

exports.get_user = async (id) => {
  if (!Number.isInteger(id)) {
    throw { errorId: 1, message:"ID must be integer"};
  }
  const user = await user_adapter.get_user(id);
  return user;
};