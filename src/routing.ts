import { userController } from "./controllers/Usercontroller"
import { secourController } from "./controllers/SecourController"
import { santeController } from "./controllers/SanteController"
import { procheController } from "./controllers/ProcheController"
import { Auth } from "./controllers/auth";
import bodyParser from "body-parser";

// @ts-ignore
export const routing = (app) => {

    // User

    const jsonParser = bodyParser.json()

    app.post('/users/signup', jsonParser, Auth.signup)
    app.post('/users/login', jsonParser, Auth.login)
    app.post('/users', Auth.isToken, userController.save)
    app.get('/users', Auth.isToken, userController.findAll)
    app.get('/users/:id', Auth.isToken, userController.findById)
    app.delete('/users/:id', Auth.isToken, userController.deleteById)
    app.get('/users/username/:username', Auth.isToken, userController.findByUsername)


    // User
    app.post('/users', jsonParser, userController.save)
    app.get('/users', jsonParser, userController.findAll)
    app.get('/users/:id', userController.findById)
    app.delete('/users/:id', userController.deleteById)
    app.get('/users/username/:username', userController.findByUsername)
    app.get('/users/:id/secour', userController.findSecour)

    // Secour
    app.post('/secours', jsonParser, secourController.save)
    app.get('/secours', secourController.findAll)
    app.get('/secours/:id', secourController.findById)
    app.delete('/secours/:id', secourController.deleteById)

    // Sante
    app.post('/sante', jsonParser, santeController.save)
    app.get('/sante', santeController.findAll)
    app.get('/sante/:id', santeController.findById)
    app.delete('/sante/:id', santeController.deleteById)


    // Proche
    app.post('/proche', jsonParser, procheController.save)
    app.get('/proche', procheController.findAll)
    app.get('/proche/:id', procheController.findById)
    app.delete('/proche/:id', procheController.deleteById)

}