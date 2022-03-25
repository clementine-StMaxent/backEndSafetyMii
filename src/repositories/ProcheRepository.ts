import mongoose from "mongoose";

const procheSchema = new mongoose.Schema({
    nom:String,
    prenom: String, 
    numeroTelephone: String
})

const procheModel = mongoose.model('proche',procheSchema)

class ProcheRepository {
    save(proche){
        return new procheModel(proche).save()
    }

    findAll(){
        return procheModel.find().exec()
    }

    findById(id){
        return procheModel.findById(id).exec()
    }

    deleteById(id){
        return procheModel.deleteOne({_id:id}).exec()
    }
}

export const procheRepository = Object.freeze(new ProcheRepository())