const UserModel = require("../Models/UserModel")

class UserController{

  async usercreate (req ,res){
    const createUser = await UserModel.create(req.body)
    return res.status(200).json(createUser)
  }

  async userlist(req, res){
    const listuser = await UserModel.find()
    return res.status(200).json(listuser)
  }

  async userlistId (req , res){
    const {id} = req.params;

    const usersId = await UserModel.findById(id);
    
    if(!usersId){
      return res.status(404).json({message: "Usuário não encontrado"});
    }
    return res.status(200).json(usersId)
  }

}

module.exports = new UserController