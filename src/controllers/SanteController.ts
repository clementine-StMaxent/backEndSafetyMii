import { santeService } from "../services/santeService";

class SanteController {

    save(req, res){
        console.log("TEST")
        const body = req.body
        santeService.save(req.body).then(data => {
            res.json(data)
        })
    }

    findAll(req, res){
        santeService.findAll().then(data => {
            res.json(data)
        })
    }

    findById(req, res){
        const id = req.params.id;
        santeService.findById(id).then(data => {
            return res.json(data)
        })
    }

    deleteById(req, res){
        santeService.deleteById(req.params.id).then(ok=>{
            res.send("OK")
        }, err => {
            res.sendStatus(404)
        })
    }
}

export const santeController = Object.freeze(new SanteController())