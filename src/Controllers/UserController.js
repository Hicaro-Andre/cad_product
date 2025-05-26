const UserModel = require("../Models/UserModel")

class UserController{

  async usercreate (req ,res){
    const createUser = await UserModel.create(req.body)
    return res.status(200).json(createUser)
  }

}

module.exports = new UserController