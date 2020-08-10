import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    email:String,
    password:String,
    createdAt:Date,
    secourId:String
})

const userModel = mongoose.model('user',userSchema)

class UserRepository {
    save(user){
        return new userModel(user).save()
    }

    findAll(){
        return userModel.find().exec()
    }

    findById(id){
        return userModel.findById(id).exec()
    }

    deleteById(id){
        return userModel.deleteOne({_id:id}).exec()
    }

    findByUsername(username){
        return userModel.find({username:username}).exec()
    }
}

export const userRepository = Object.freeze(new UserRepository())