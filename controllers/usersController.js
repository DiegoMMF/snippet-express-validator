const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');
const { validationResult } = require('express-validator');

module.exports = {

    index: (req, res) => {
        let users = usersModel.all()
        res.render('users/index',  { users });
    },

    create: (req, res) => res.render('users/create'),

    store: (req, res) => {
        // errors recibirá el arreglo de validaciones
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // si errors está vacío, redirigimos
            let user = req.body;
            userId = usersModel.create(user);
            res.redirect('/users/' + userId);
        } else {
            // primera verificación
            res.send(errors);
            
            // si hay errores, los mostramos en pantalla
            /* res.render(
                'users/create',
                {
                    errors: errors.array(),
                    old: req.body
                }
            );    */              
        }
    },

    show: (req, res) => {
        let user = usersModel.find(req.params.id);
        res.render('users/detail', { user });
    }
}