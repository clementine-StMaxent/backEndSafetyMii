import { procheRepository } from "../repositories/ProcheRepository";
import { userRepository } from "../repositories/UserRepository";

class ProcheService {

    save(proche) {
        proche.createdAt = Date.now()
        return procheRepository.save(proche)
    }

    findAll() {
        return procheRepository.findAll()
    }

    findById(id) {
        return procheRepository.findById(id)
    }

    deleteById(id) {
        return procheRepository.deleteById(id)
    }

}

export const procheService = Object.freeze(new ProcheService())