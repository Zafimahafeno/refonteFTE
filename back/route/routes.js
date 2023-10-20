const express = require('express');
const route = express.Router();

// route admin
const admin = require('../controller/adminController');
route.post('/register', admin.register);
route.post('/login', admin.login);

// route games
const games = require('../controller/gameController');
route.post('/liste_game', games.create);
route.get('/tsirionantsoa_fte/liste_game', games.getAll)
route.get('/liste_game/nom_game', games.getName_liste)
route.get('/tsirionantsoa_fte/listeGame_read/:id_lg', games.findOne)
route.put('/tsirionantsoa_fte/listeGame_edit/:id_lg', games.update)
route.delete('/tsirionantsoa_fte/delete/:id_lg', games.delete)

// route participant_game
const participant_game = require('../controller/participantGameController');
route.post('/Create_participant_game', participant_game.create);
route.get('/tsirionantsoa_fte/participant_game', participant_game.getAll);
route.get('/tsirionantsoa_fte/read_participant/:id_pg', participant_game.findOne);
route.put('/tsirionantsoa_fte/edit_participant/:id_pg', participant_game.update);
route.delete('/tsirionantsoa_fte/delete_participant/:id_pg', participant_game.delete);

// route participant_stand
const participant_stand = require('../controller/participantStandController');
route.post('/Create_stand', participant_stand.create);     
route.get('/tsirionantsoa_fte/participant_stand', participant_stand.getAll);
route.get('/tsirionantsoa_fte/read_stand/:id_ps', participant_stand.getOne);
route.put('/tsirionantsoa_fte/edit_stand/:id_ps', participant_stand.update);
route.delete('/tsirionantsoa_fte/delete_stand/:id_ps', participant_stand.delete);

// route participant_hackaton
const participant_hackaton = require('../controller/participantHackaton');
route.post('/Create_participant_hackaton', participant_hackaton.create);     
route.get('/tsirionantsoa_fte/participant_hackaton', participant_hackaton.getAll);
route.put('/tsirionantsoa_fte/edit_hackaton/:id_Ph', participant_hackaton.update);
route.delete('/tsirionantsoa_fte/delete_hackaton/:id_Ph', participant_hackaton.delete);

// route partenaire
const partenaire = require('../controller/partenaireController');
route.post('/Create_partenaire', partenaire.create);     
route.get('/tsirionantsoa_fte/partenaire', partenaire.getAll);
route.put('/tsirionantsoa_fte/edit_partenaire/:company_name', partenaire.update);
route.delete('/tsirionantsoa_fte/delete_partenaire/:company_name', partenaire.delete);

// route theme
const themes = require('../controller/themeController');
route.post('/Create_theme', themes.create);
route.get('/tsirionantsoa_fte/theme', themes.getAll);
route.delete('/tsirionantsoa_fte/delete_theme/:id_th', themes.delete);

// route offre stand
const offre_stand = require('../controller/offreStandController');
route.post('/Create_offre', offre_stand.create);
route.get('/tsirionantsoa_fte/offre_stand', offre_stand.getAll);
route.get('/tsirionantsoa_fte/read_offre/:id_os', offre_stand.findOne);
route.put('/tsirionantsoa_fte/edit_offre/:id_os', offre_stand.update);
route.delete('/tsirionantsoa_fte/delete_offre/:id_os', offre_stand.delete);
route.get('/name_Stand', offre_stand.getName_Stands);

// route Reservation Place
const reservation = require('../controller/reservationPlaceController');

route.post('/Create_Reservation_Place', reservation.create);
route.get('/Reservation_place', reservation.getAll);
route.delete('/delete_Rservation_Place/:id_pvi', reservation.delete);

const { sendEmail } = require('../controller/EmailController');
route.post('/sendemail', sendEmail );


module.exports = route;