
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { id:'/', title: 'Express' });
};

exports.about = function (req, res) {
    res.render('about', { id: 'about', title: 'About' });
};

exports.contact = function (req, res) {
    res.render('contact', { id: 'contact', title: 'Contact' });
};