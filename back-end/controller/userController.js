const User = require('../model/user')

// Create a new user
async function registerNewUser(user) {
  // const { error } = user.joiValidate()
  // if (error) {
  //   throw new Error(error.details[0].message)
  //   return error
  // }

  let existedUser = await UserModel.findOne({ email: user.email })
  if (existedUser) {
    return err
  }

  try {
    const newUser = new UserModel(user)
    const result = await newUser.save()
    return result
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

// retrieve user from database
async function getUserByID(id) {
  try {
    const user = await UserModel.findById(id)
    if (!user) {
      console.log('user not found')
      return null
    }
    return user
  } catch (err) {
    console.log(err)
    // throw new Error(err)
  }
}

async function getUserByUsername(username) {
  try {
    const user = await UserModel.findOne({ username: username })
    if (!user) {
      console.log('user not found')
      return null
    }
    return user
  } catch (err) {
    console.log(err)
    // throw new Error(err)
  }
}

// update user details
async function updateUser(id, user) {
  // validate user details here
  try {
    const result = await UserModel.findByIdAndUpdate(id, user)
    return result
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

// delete user from database
async function deleteUser(id) {
  try {
    const result = await UserModel.findByIdAndDelete(id)
    return result
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports = {
  registerNewUser,
  getUserByID,
  getUserByUsername,
  updateUser,
  deleteUser,
}
