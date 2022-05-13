import { userService } from "../services/UserService";

class UserController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        userService.save(req.body).then(data => {
            res.json(data)
        })
    }

    findAll(req, res){
        userService.findAll().then(data => {
            res.json(data)
        })
    }

    findById(req, res){
        const id = req.params.id;
        userService.findById(id).then(data => {
            return res.json(data)
        })
    }

    deleteById(req, res){
        userService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }

    findByUsername(req, res){
        const username = req.params.username
        userService.findByUserName(username).then(data => {
            res.json(data)
        })
    }

    findByMail(req, res){
        const email = req.params.email
        userService.findByMail(email).then(data => {
            res.json(data)
        })
    }

    findSecour(req, res){
        userService.findSecour(req.params.id).then(data => {
            res.json(data)
        })
    }
}

export const userController = Object.freeze(new UserController())