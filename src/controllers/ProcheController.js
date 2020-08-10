import { procheService } from "../services/procheService";

class ProcheController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        procheService.save(req.body).then(data => {
            res.json(data)
        })
    }

    findAll(req, res){
        procheService.findAll().then(data => {
            res.json(data)
        })
    }

    findById(req, res){
        const id = req.params.id;
        procheService.findById(id).then(data => {
            return res.json(data)
        })
    }

    deleteById(req, res){
        procheService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }
}

export const procheController = Object.freeze(new ProcheController())