const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const { sign,} = require('../services/token');

module.exports = {
  authenticate: async (credentials) => {
      const user = await User.findOne({email: credentials.email});
      if(!user) throw new Error('User not found');
      const validPassword = await bcrypt.compare(credentials.password, user.password);
      if(validPassword) return sign({ email: user.email, id: user._id});
      else throw new Error('Invalid password');
  },
  create: async (userDetails) => {
      const existingUser = await User.findOne({email: userDetails.email}).select('-password');
      if(existingUser) throw new Error('User already exists');
      const user = await User.create({...userDetails});
      if(!user) throw new Error('User not created');      
      return { success: true, message: 'User was successfully created', id: user._id};
  },
  index: async () => User.find({}).select('-password'),
  show: async (id) => {
      const user = await User.findById(id).select('-password');
      if(!user) throw new Error('User not found');
      return user;
  }
};

