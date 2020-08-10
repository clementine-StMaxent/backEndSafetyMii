import { santeRepository } from "../repositories/SanteRepository";
import { userRepository } from "../repositories/UserRepository";

class SanteService {

    save(sante) {
        sante.createdAt = Date.now()
        return santeRepository.save(sante)
    }

    findAll() {
        return santeRepository.findAll()
    }

    findById(id) {
        return santeRepository.findById(id)
    }

    deleteById(id) {
        return santeRepository.deleteById(id)
    }

}

export const santeService = Object.freeze(new SanteService())