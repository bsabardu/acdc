const fs = require('fs');
const path = require('path');

exports.homePage = (req,res,next) => {
    res.render('home');
}

exports.clubPage = (req,res,next) => {
    res.render('club');
}

exports.eventsPage = (req,res,next) => {
    res.render('events');
}

exports.teamPage =  (req,res,next) => {

    const riders = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/riders.json'), 'utf8'))

    res.render('team', {riders : riders});
}


exports.mentionsPage = (req,res,next) => {
    res.render('mentions');
}

exports.contactPage = (req,res,next) => {
    res.render('contact');
}