import { secourService } from "../services/secourService";

class SecourController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        secourService.save(req.body).then(data => {
            res.json(data)
        })
    }

    findAll(req, res){
        secourService.findAll().then(data => {
            res.json(data)
        })
    }

    findById(req, res){
        const id = req.params.id;
        secourService.findById(id).then(data => {
            return res.json(data)
        })
    }

    deleteById(req, res){
        secourService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }
}

export const secourController = Object.freeze(new SecourController())