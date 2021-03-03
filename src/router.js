const router = require('express').Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage)

router.get('/club', mainController.clubPage)

router.get('/calendrier', mainController.eventsPage)

router.get('/team', mainController.teamPage)

router.get('/mentions-legales', mainController.mentionsPage)

router.get('/contact', mainController.contactPage)


// POST route from contact form
router.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: GMAIL_USER,
      subject: 'New message from contact form at tylerkrys.ca',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.render('contact-failure') // Show a page indicating failure
      }
      else {
        res.render('contact-success') // Show a page indicating success
      }
    })
  })

module.exports = router