const express = require('express');
const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const SessionController = require('./controllers/sessionController');
const ProfileController = require('./controllers/profileController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
module.exports = routes;