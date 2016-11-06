/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};

exports.angularTemplate = (req, res) => {
    req.params.template = req.params.template.replace('-', '/');
    res.render('templates/' + req.params.template);
};