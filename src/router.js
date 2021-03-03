const router = require('express').Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage)

router.get('/club', mainController.clubPage)

router.get('/calendrier', mainController.eventsPage)

router.get('/team', mainController.teamPage)

router.get('/mentions-legales', mainController.mentionsPage)

module.exports = router