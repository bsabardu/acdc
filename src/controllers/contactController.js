const nodemailer = require('nodemailer')

exports.sendMail = (req, res, next) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    // Specify what the email will look like
    const mailOpts = {
        from: 'Your sender info here', // This is ignored by Gmail
        to: process.env.MAIL_USER,
        subject: '(CONTACT ACDC) - Nouveau message sur le site ACDC',
        text: `${req.body.firstname} ${req.body.name} - (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render('contact-failure') // Show a page indicating failure
        } else {
            res.render('contact-success') // Show a page indicating success
        }
    })
}