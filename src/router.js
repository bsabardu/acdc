const router = require('express').Router();
const mainController = require('./controllers/mainController');
const contactController = require('./controllers/contactController');

router.get('/', mainController.homePage)

router.get('/club', mainController.clubPage)

router.get('/calendrier', mainController.eventsPage)

router.get('/team', mainController.teamPage)

router.get('/mentions-legales', mainController.mentionsPage)

router.get('/credits', mainController.creditsPage)

router.get('/contact', mainController.contactPage)


// POST route from contact form
router.post('/contact', contactController.sendMail)

module.exports = router