const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
const usersRouter = require('./routes/users');

app.get('/', (req, res) => res.redirect('/users/'));
app.use('/users', usersRouter);

// Servidor
app.listen(3001, () => console.log('Go to http://localhost:3001'));
