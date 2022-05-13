import mongoose, { Model, model, Schema,Document } from "mongoose"

export interface User extends Document{
    nom:String,
    prenom:String,
    email:String,
    password:String,
    createdAt:Date,
    secourId:String,
    __v:number
}

export const userSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    email:{type:String,unique:true,required:true},
    password:String,
    createdAt:Date,
    secourId:String
})

export const userModel:Model<User> = model('user',userSchema)

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

    findByMail(email){
        return userModel.find({email:email}).exec()
    }
}

export const userRepository = Object.freeze(new UserRepository())