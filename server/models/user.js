/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true},  
  first_name: { type: String, required: true, index: true},
  last_name: { type: String, required: true, index: true},
  password: { type: String, required: true },
}, { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' } });

/* this keyword will not work with arrow functions */
UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

exports.User = mongoose.model('User', UserSchema);