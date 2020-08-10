import { userRepository } from "../repositories/UserRepository";
import { secourService } from '../services/secourService'
class UserService {

    save(user){
        user.createdAt = Date.now()
        return userRepository.save(user)
    }

    findAll(){
        return userRepository.findAll()
    }

    findById(id){
        return userRepository.findById(id)
    }

    deleteById(id){
        return userRepository.deleteById(id)
    }

    findByUserName(username){
        return userRepository.findByUsername(username)
    }

    async findSecour(id){
        const user = await userRepository.findById(id)
        console.log(user)
        return secourService.findById(user.secourId)
    }
}

export const userService = Object.freeze(new UserService())