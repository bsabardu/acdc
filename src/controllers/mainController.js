exports.homePage = (req,res,next) => {
    res.render('home');
}

exports.clubPage = (req,res,next) => {
    res.render('club');
}

exports.eventsPage = (req,res,next) => {
    res.render('events');
}

exports.teamPage = (req,res,next) => {
    res.render('team');
}