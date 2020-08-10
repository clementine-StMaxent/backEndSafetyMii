import mongoose from "mongoose";

const secourSchema = new mongoose.Schema({
    nomSecour:String
})

const secourModel = mongoose.model('secour',secourSchema)

class SecourRepository {
    save(secour){
        return new secourModel(secour).save()
    }

    findAll(){
        return secourModel.find().exec()
    }

    findById(id){
        return secourModel.findById(id).exec()
    }

    deleteById(id){
        return secourModel.deleteOne({_id:id}).exec()
    }
}

export const secourRepository = Object.freeze(new SecourRepository())