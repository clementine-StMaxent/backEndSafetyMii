import mongoose from "mongoose";

const santeSchema = new mongoose.Schema({
    groupeSanguin: String,
    medicament: String,
    allergie: String,
    pathologies : String,
    numeroTelephone: String,
    MedecinTraitant: String,
    numeroTelephoneMedecin: String

})

const santeModel = mongoose.model('sante', santeSchema)

class SanteRepository {
    save(sante) {
        return new santeModel(sante).save()
    }

    findAll() {
        return santeModel.find().exec()
    }

    findById(id) {
        return santeModel.findById(id).exec()
    }

    deleteById(id) {
        return santeModel.deleteOne({ _id: id }).exec()
    }
}

export const santeRepository = Object.freeze(new SanteRepository())