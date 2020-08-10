import { secourRepository } from "../repositories/SecourRepository";
import { userRepository } from "../repositories/UserRepository";

class SecourService {

    save(secour) {
        secour.createdAt = Date.now()
        return secourRepository.save(secour)
    }

    findAll() {
        return secourRepository.findAll()
    }

    findById(id) {
        return secourRepository.findById(id)
    }

    deleteById(id) {
        return secourRepository.deleteById(id)
    }

}

export const secourService = Object.freeze(new SecourService())