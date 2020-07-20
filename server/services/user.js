const bcrypt = require('bcrypt');
const { User } = require('../models/user');

module.exports = {
  authenticate: async (credentials) => {
    const user = await User.findOne({ email: credentials.email });
    return await bcrypt.compare(credentials.password, user.password);
  },
  create: async (user) => {
    return new User(user).save().then((result) => {
        return { success: true, message: 'User was successfully created.', id: result._id }
      }).catch((error) => {
        return { success: false, message: error };
      })
  },
  index: async () => User.find({}).select('-password'),
};