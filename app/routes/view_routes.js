module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'New ttl',
            body: 'Birds home page'
        });
    });
}